# `dataOciOperatorAccessControlAccessRequest` Submodule <a name="`dataOciOperatorAccessControlAccessRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOperatorAccessControlAccessRequest <a name="DataOciOperatorAccessControlAccessRequest" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request oci_operator_access_control_access_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_request_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.accessRequestId">access_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#access_request_id DataOciOperatorAccessControlAccessRequest#access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#id DataOciOperatorAccessControlAccessRequest#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_request_id`<sup>Required</sup> <a name="access_request_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.accessRequestId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#access_request_id DataOciOperatorAccessControlAccessRequest#access_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#id DataOciOperatorAccessControlAccessRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOperatorAccessControlAccessRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOperatorAccessControlAccessRequest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOperatorAccessControlAccessRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOperatorAccessControlAccessRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessReasonSummary">access_reason_summary</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.actionRequestsList">action_requests_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverComment">approver_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverDetails">approver_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList">DataOciOperatorAccessControlAccessRequestApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.auditType">audit_type</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.closureComment">closure_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.duration">duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extendDuration">extend_duration</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extensionApproverDetails">extension_approver_details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isAutoApproved">is_auto_approved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isValidateAssignment">is_validate_assignment</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApprovers">number_of_approvers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApproversRequired">number_of_approvers_required</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfExtensionApprovers">number_of_extension_approvers</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlAdditionalMessage">opctl_additional_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlId">opctl_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlName">opctl_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.operatorId">operator_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.reason">reason</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.requestId">request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.subResourceList">sub_resource_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.systemMessage">system_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfCreation">time_of_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfModification">time_of_modification</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfUserCreation">time_of_user_creation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeRequestedForFutureAccess">time_requested_for_future_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.workflowId">workflow_id</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestIdInput">access_request_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestId">access_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `access_reason_summary`<sup>Required</sup> <a name="access_reason_summary" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessReasonSummary"></a>

```python
access_reason_summary: str
```

- *Type:* str

---

##### `action_requests_list`<sup>Required</sup> <a name="action_requests_list" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.actionRequestsList"></a>

```python
action_requests_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `approver_comment`<sup>Required</sup> <a name="approver_comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverComment"></a>

```python
approver_comment: str
```

- *Type:* str

---

##### `approver_details`<sup>Required</sup> <a name="approver_details" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.approverDetails"></a>

```python
approver_details: DataOciOperatorAccessControlAccessRequestApproverDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList">DataOciOperatorAccessControlAccessRequestApproverDetailsList</a>

---

##### `audit_type`<sup>Required</sup> <a name="audit_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.auditType"></a>

```python
audit_type: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `closure_comment`<sup>Required</sup> <a name="closure_comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.closureComment"></a>

```python
closure_comment: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `duration`<sup>Required</sup> <a name="duration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.duration"></a>

```python
duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extend_duration`<sup>Required</sup> <a name="extend_duration" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extendDuration"></a>

```python
extend_duration: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extension_approver_details`<sup>Required</sup> <a name="extension_approver_details" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.extensionApproverDetails"></a>

```python
extension_approver_details: DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList">DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_auto_approved`<sup>Required</sup> <a name="is_auto_approved" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isAutoApproved"></a>

```python
is_auto_approved: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_validate_assignment`<sup>Required</sup> <a name="is_validate_assignment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.isValidateAssignment"></a>

```python
is_validate_assignment: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `number_of_approvers`<sup>Required</sup> <a name="number_of_approvers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApprovers"></a>

```python
number_of_approvers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_approvers_required`<sup>Required</sup> <a name="number_of_approvers_required" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfApproversRequired"></a>

```python
number_of_approvers_required: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `number_of_extension_approvers`<sup>Required</sup> <a name="number_of_extension_approvers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.numberOfExtensionApprovers"></a>

```python
number_of_extension_approvers: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `opctl_additional_message`<sup>Required</sup> <a name="opctl_additional_message" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlAdditionalMessage"></a>

```python
opctl_additional_message: str
```

- *Type:* str

---

##### `opctl_id`<sup>Required</sup> <a name="opctl_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlId"></a>

```python
opctl_id: str
```

- *Type:* str

---

##### `opctl_name`<sup>Required</sup> <a name="opctl_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.opctlName"></a>

```python
opctl_name: str
```

- *Type:* str

---

##### `operator_id`<sup>Required</sup> <a name="operator_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.operatorId"></a>

```python
operator_id: str
```

- *Type:* str

---

##### `reason`<sup>Required</sup> <a name="reason" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.reason"></a>

```python
reason: str
```

- *Type:* str

---

##### `request_id`<sup>Required</sup> <a name="request_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.requestId"></a>

```python
request_id: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `sub_resource_list`<sup>Required</sup> <a name="sub_resource_list" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.subResourceList"></a>

```python
sub_resource_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `system_message`<sup>Required</sup> <a name="system_message" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.systemMessage"></a>

```python
system_message: str
```

- *Type:* str

---

##### `time_of_creation`<sup>Required</sup> <a name="time_of_creation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfCreation"></a>

```python
time_of_creation: str
```

- *Type:* str

---

##### `time_of_modification`<sup>Required</sup> <a name="time_of_modification" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfModification"></a>

```python
time_of_modification: str
```

- *Type:* str

---

##### `time_of_user_creation`<sup>Required</sup> <a name="time_of_user_creation" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeOfUserCreation"></a>

```python
time_of_user_creation: str
```

- *Type:* str

---

##### `time_requested_for_future_access`<sup>Required</sup> <a name="time_requested_for_future_access" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.timeRequestedForFutureAccess"></a>

```python
time_requested_for_future_access: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `workflow_id`<sup>Required</sup> <a name="workflow_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.workflowId"></a>

```python
workflow_id: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `access_request_id_input`<sup>Optional</sup> <a name="access_request_id_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestIdInput"></a>

```python
access_request_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `access_request_id`<sup>Required</sup> <a name="access_request_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.accessRequestId"></a>

```python
access_request_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOperatorAccessControlAccessRequestApproverDetails <a name="DataOciOperatorAccessControlAccessRequestApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails()
```


### DataOciOperatorAccessControlAccessRequestConfig <a name="DataOciOperatorAccessControlAccessRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  access_request_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.accessRequestId">access_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#access_request_id DataOciOperatorAccessControlAccessRequest#access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#id DataOciOperatorAccessControlAccessRequest#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `access_request_id`<sup>Required</sup> <a name="access_request_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.accessRequestId"></a>

```python
access_request_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#access_request_id DataOciOperatorAccessControlAccessRequest#access_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/operator_access_control_access_request#id DataOciOperatorAccessControlAccessRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciOperatorAccessControlAccessRequestExtensionApproverDetails <a name="DataOciOperatorAccessControlAccessRequestExtensionApproverDetails" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOperatorAccessControlAccessRequestApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAction">approval_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAdditionalMessage">approval_additional_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalComment">approval_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approverId">approver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeApprovedForAccess">time_approved_for_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeOfAuthorization">time_of_authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails">DataOciOperatorAccessControlAccessRequestApproverDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_action`<sup>Required</sup> <a name="approval_action" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAction"></a>

```python
approval_action: str
```

- *Type:* str

---

##### `approval_additional_message`<sup>Required</sup> <a name="approval_additional_message" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```python
approval_additional_message: str
```

- *Type:* str

---

##### `approval_comment`<sup>Required</sup> <a name="approval_comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approvalComment"></a>

```python
approval_comment: str
```

- *Type:* str

---

##### `approver_id`<sup>Required</sup> <a name="approver_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.approverId"></a>

```python
approver_id: str
```

- *Type:* str

---

##### `time_approved_for_access`<sup>Required</sup> <a name="time_approved_for_access" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```python
time_approved_for_access: str
```

- *Type:* str

---

##### `time_of_authorization`<sup>Required</sup> <a name="time_of_authorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```python
time_of_authorization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOperatorAccessControlAccessRequestApproverDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestApproverDetails">DataOciOperatorAccessControlAccessRequestApproverDetails</a>

---


### DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList <a name="DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference <a name="DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_operator_access_control_access_request

dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAction">approval_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage">approval_additional_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalComment">approval_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approverId">approver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeApprovedForAccess">time_approved_for_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeOfAuthorization">time_of_authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestExtensionApproverDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_action`<sup>Required</sup> <a name="approval_action" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAction"></a>

```python
approval_action: str
```

- *Type:* str

---

##### `approval_additional_message`<sup>Required</sup> <a name="approval_additional_message" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalAdditionalMessage"></a>

```python
approval_additional_message: str
```

- *Type:* str

---

##### `approval_comment`<sup>Required</sup> <a name="approval_comment" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approvalComment"></a>

```python
approval_comment: str
```

- *Type:* str

---

##### `approver_id`<sup>Required</sup> <a name="approver_id" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.approverId"></a>

```python
approver_id: str
```

- *Type:* str

---

##### `time_approved_for_access`<sup>Required</sup> <a name="time_approved_for_access" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeApprovedForAccess"></a>

```python
time_approved_for_access: str
```

- *Type:* str

---

##### `time_of_authorization`<sup>Required</sup> <a name="time_of_authorization" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.timeOfAuthorization"></a>

```python
time_of_authorization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOperatorAccessControlAccessRequestExtensionApproverDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOperatorAccessControlAccessRequest.DataOciOperatorAccessControlAccessRequestExtensionApproverDetails">DataOciOperatorAccessControlAccessRequestExtensionApproverDetails</a>

---



