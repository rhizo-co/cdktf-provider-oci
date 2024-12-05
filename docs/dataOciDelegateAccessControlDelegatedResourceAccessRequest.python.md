# `dataOciDelegateAccessControlDelegatedResourceAccessRequest` Submodule <a name="`dataOciDelegateAccessControlDelegatedResourceAccessRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequest <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequest" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request oci_delegate_access_control_delegated_resource_access_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delegated_resource_access_request_id: str,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.delegatedResourceAccessRequestId">delegated_resource_access_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequest#delegated_resource_access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#id DataOciDelegateAccessControlDelegatedResourceAccessRequest#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delegated_resource_access_request_id`<sup>Required</sup> <a name="delegated_resource_access_request_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.delegatedResourceAccessRequestId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequest#delegated_resource_access_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#id DataOciDelegateAccessControlDelegatedResourceAccessRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciDelegateAccessControlDelegatedResourceAccessRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciDelegateAccessControlDelegatedResourceAccessRequest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciDelegateAccessControlDelegatedResourceAccessRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciDelegateAccessControlDelegatedResourceAccessRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.approvalInfo">approval_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList">DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.auditTypes">audit_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.closureComment">closure_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.databaseNameList">database_name_list</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegationControlId">delegation_control_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegationSubscriptionIds">delegation_subscription_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.durationInHours">duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.extendDurationInHours">extend_duration_in_hours</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.isAutoApproved">is_auto_approved</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.isPendingMoreInfo">is_pending_more_info</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.lifecycleStateDetails">lifecycle_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.numExtensionApprovals">num_extension_approvals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.numInitialApprovals">num_initial_approvals</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.providedServiceTypes">provided_service_types</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.reasonForRequest">reason_for_request</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requestedActionNames">requested_action_names</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requesterType">requester_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requestStatus">request_status</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceId">resource_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.severity">severity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.ticketNumbers">ticket_numbers</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeAccessRequested">time_access_requested</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegatedResourceAccessRequestIdInput">delegated_resource_access_request_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegatedResourceAccessRequestId">delegated_resource_access_request_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.id">id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `approval_info`<sup>Required</sup> <a name="approval_info" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.approvalInfo"></a>

```python
approval_info: DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList">DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList</a>

---

##### `audit_types`<sup>Required</sup> <a name="audit_types" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.auditTypes"></a>

```python
audit_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `closure_comment`<sup>Required</sup> <a name="closure_comment" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.closureComment"></a>

```python
closure_comment: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `database_name_list`<sup>Required</sup> <a name="database_name_list" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.databaseNameList"></a>

```python
database_name_list: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `delegation_control_id`<sup>Required</sup> <a name="delegation_control_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegationControlId"></a>

```python
delegation_control_id: str
```

- *Type:* str

---

##### `delegation_subscription_ids`<sup>Required</sup> <a name="delegation_subscription_ids" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegationSubscriptionIds"></a>

```python
delegation_subscription_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `duration_in_hours`<sup>Required</sup> <a name="duration_in_hours" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.durationInHours"></a>

```python
duration_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `extend_duration_in_hours`<sup>Required</sup> <a name="extend_duration_in_hours" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.extendDurationInHours"></a>

```python
extend_duration_in_hours: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `is_auto_approved`<sup>Required</sup> <a name="is_auto_approved" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.isAutoApproved"></a>

```python
is_auto_approved: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `is_pending_more_info`<sup>Required</sup> <a name="is_pending_more_info" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.isPendingMoreInfo"></a>

```python
is_pending_more_info: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_state_details`<sup>Required</sup> <a name="lifecycle_state_details" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.lifecycleStateDetails"></a>

```python
lifecycle_state_details: str
```

- *Type:* str

---

##### `num_extension_approvals`<sup>Required</sup> <a name="num_extension_approvals" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.numExtensionApprovals"></a>

```python
num_extension_approvals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `num_initial_approvals`<sup>Required</sup> <a name="num_initial_approvals" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.numInitialApprovals"></a>

```python
num_initial_approvals: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `provided_service_types`<sup>Required</sup> <a name="provided_service_types" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.providedServiceTypes"></a>

```python
provided_service_types: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `reason_for_request`<sup>Required</sup> <a name="reason_for_request" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.reasonForRequest"></a>

```python
reason_for_request: str
```

- *Type:* str

---

##### `requested_action_names`<sup>Required</sup> <a name="requested_action_names" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requestedActionNames"></a>

```python
requested_action_names: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `requester_type`<sup>Required</sup> <a name="requester_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requesterType"></a>

```python
requester_type: str
```

- *Type:* str

---

##### `request_status`<sup>Required</sup> <a name="request_status" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.requestStatus"></a>

```python
request_status: str
```

- *Type:* str

---

##### `resource_id`<sup>Required</sup> <a name="resource_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceId"></a>

```python
resource_id: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `severity`<sup>Required</sup> <a name="severity" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.severity"></a>

```python
severity: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `ticket_numbers`<sup>Required</sup> <a name="ticket_numbers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.ticketNumbers"></a>

```python
ticket_numbers: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `time_access_requested`<sup>Required</sup> <a name="time_access_requested" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeAccessRequested"></a>

```python
time_access_requested: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `delegated_resource_access_request_id_input`<sup>Optional</sup> <a name="delegated_resource_access_request_id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegatedResourceAccessRequestIdInput"></a>

```python
delegated_resource_access_request_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `delegated_resource_access_request_id`<sup>Required</sup> <a name="delegated_resource_access_request_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.delegatedResourceAccessRequestId"></a>

```python
delegated_resource_access_request_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.id"></a>

```python
id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo()
```


### DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  delegated_resource_access_request_id: str,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.delegatedResourceAccessRequestId">delegated_resource_access_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequest#delegated_resource_access_request_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#id DataOciDelegateAccessControlDelegatedResourceAccessRequest#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `delegated_resource_access_request_id`<sup>Required</sup> <a name="delegated_resource_access_request_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.delegatedResourceAccessRequestId"></a>

```python
delegated_resource_access_request_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#delegated_resource_access_request_id DataOciDelegateAccessControlDelegatedResourceAccessRequest#delegated_resource_access_request_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/delegate_access_control_delegated_resource_access_request#id DataOciDelegateAccessControlDelegatedResourceAccessRequest#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

## Classes <a name="Classes" id="Classes"></a>

### DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference <a name="DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_delegate_access_control_delegated_resource_access_request

dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approvalAction">approval_action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approvalType">approval_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverAdditionalMessage">approver_additional_message</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverComment">approver_comment</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverId">approver_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.timeApprovedForAccess">time_approved_for_access</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo">DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `approval_action`<sup>Required</sup> <a name="approval_action" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approvalAction"></a>

```python
approval_action: str
```

- *Type:* str

---

##### `approval_type`<sup>Required</sup> <a name="approval_type" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approvalType"></a>

```python
approval_type: str
```

- *Type:* str

---

##### `approver_additional_message`<sup>Required</sup> <a name="approver_additional_message" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverAdditionalMessage"></a>

```python
approver_additional_message: str
```

- *Type:* str

---

##### `approver_comment`<sup>Required</sup> <a name="approver_comment" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverComment"></a>

```python
approver_comment: str
```

- *Type:* str

---

##### `approver_id`<sup>Required</sup> <a name="approver_id" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.approverId"></a>

```python
approver_id: str
```

- *Type:* str

---

##### `time_approved_for_access`<sup>Required</sup> <a name="time_approved_for_access" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.timeApprovedForAccess"></a>

```python
time_approved_for_access: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciDelegateAccessControlDelegatedResourceAccessRequest.DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo">DataOciDelegateAccessControlDelegatedResourceAccessRequestApprovalInfo</a>

---



