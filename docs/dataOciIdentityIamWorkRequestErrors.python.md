# `dataOciIdentityIamWorkRequestErrors` Submodule <a name="`dataOciIdentityIamWorkRequestErrors` Submodule" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciIdentityIamWorkRequestErrors <a name="DataOciIdentityIamWorkRequestErrors" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors oci_identity_iam_work_request_errors}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iam_work_request_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciIdentityIamWorkRequestErrorsFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.iamWorkRequestId">iam_work_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#iam_work_request_id DataOciIdentityIamWorkRequestErrors#iam_work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#id DataOciIdentityIamWorkRequestErrors#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iam_work_request_id`<sup>Required</sup> <a name="iam_work_request_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.iamWorkRequestId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#iam_work_request_id DataOciIdentityIamWorkRequestErrors#iam_work_request_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#filter DataOciIdentityIamWorkRequestErrors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#id DataOciIdentityIamWorkRequestErrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciIdentityIamWorkRequestErrorsFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciIdentityIamWorkRequestErrors resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciIdentityIamWorkRequestErrors resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciIdentityIamWorkRequestErrors to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciIdentityIamWorkRequestErrors that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciIdentityIamWorkRequestErrors to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList">DataOciIdentityIamWorkRequestErrorsFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestErrors">iam_work_request_errors</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList">DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestIdInput">iam_work_request_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestId">iam_work_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.filter"></a>

```python
filter: DataOciIdentityIamWorkRequestErrorsFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList">DataOciIdentityIamWorkRequestErrorsFilterList</a>

---

##### `iam_work_request_errors`<sup>Required</sup> <a name="iam_work_request_errors" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestErrors"></a>

```python
iam_work_request_errors: DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList">DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciIdentityIamWorkRequestErrorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>]]

---

##### `iam_work_request_id_input`<sup>Optional</sup> <a name="iam_work_request_id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestIdInput"></a>

```python
iam_work_request_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `iam_work_request_id`<sup>Required</sup> <a name="iam_work_request_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.iamWorkRequestId"></a>

```python
iam_work_request_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrors.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciIdentityIamWorkRequestErrorsConfig <a name="DataOciIdentityIamWorkRequestErrorsConfig" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  iam_work_request_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciIdentityIamWorkRequestErrorsFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.iamWorkRequestId">iam_work_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#iam_work_request_id DataOciIdentityIamWorkRequestErrors#iam_work_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#id DataOciIdentityIamWorkRequestErrors#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `iam_work_request_id`<sup>Required</sup> <a name="iam_work_request_id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.iamWorkRequestId"></a>

```python
iam_work_request_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#iam_work_request_id DataOciIdentityIamWorkRequestErrors#iam_work_request_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciIdentityIamWorkRequestErrorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#filter DataOciIdentityIamWorkRequestErrors#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#id DataOciIdentityIamWorkRequestErrors#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciIdentityIamWorkRequestErrorsFilter <a name="DataOciIdentityIamWorkRequestErrorsFilter" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#name DataOciIdentityIamWorkRequestErrors#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#values DataOciIdentityIamWorkRequestErrors#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#regex DataOciIdentityIamWorkRequestErrors#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#name DataOciIdentityIamWorkRequestErrors#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#values DataOciIdentityIamWorkRequestErrors#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/identity_iam_work_request_errors#regex DataOciIdentityIamWorkRequestErrors#regex}.

---

### DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors <a name="DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciIdentityIamWorkRequestErrorsFilterList <a name="DataOciIdentityIamWorkRequestErrorsFilterList" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityIamWorkRequestErrorsFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciIdentityIamWorkRequestErrorsFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>]]

---


### DataOciIdentityIamWorkRequestErrorsFilterOutputReference <a name="DataOciIdentityIamWorkRequestErrorsFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciIdentityIamWorkRequestErrorsFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsFilter">DataOciIdentityIamWorkRequestErrorsFilter</a>]

---


### DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList <a name="DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference <a name="DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_identity_iam_work_request_errors

dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.code">code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.message">message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.timestamp">timestamp</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors">DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `code`<sup>Required</sup> <a name="code" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.code"></a>

```python
code: str
```

- *Type:* str

---

##### `message`<sup>Required</sup> <a name="message" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.message"></a>

```python
message: str
```

- *Type:* str

---

##### `timestamp`<sup>Required</sup> <a name="timestamp" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.timestamp"></a>

```python
timestamp: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrorsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciIdentityIamWorkRequestErrors.DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors">DataOciIdentityIamWorkRequestErrorsIamWorkRequestErrors</a>

---



