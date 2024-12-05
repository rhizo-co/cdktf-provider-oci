# `dataOciCapacityManagementOccCapacityRequest` Submodule <a name="`dataOciCapacityManagementOccCapacityRequest` Submodule" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciCapacityManagementOccCapacityRequest <a name="DataOciCapacityManagementOccCapacityRequest" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request oci_capacity_management_occ_capacity_request}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  occ_capacity_request_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.occCapacityRequestId">occ_capacity_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request#occ_capacity_request_id DataOciCapacityManagementOccCapacityRequest#occ_capacity_request_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `occ_capacity_request_id`<sup>Required</sup> <a name="occ_capacity_request_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.Initializer.parameter.occCapacityRequestId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request#occ_capacity_request_id DataOciCapacityManagementOccCapacityRequest#occ_capacity_request_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciCapacityManagementOccCapacityRequest resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciCapacityManagementOccCapacityRequest to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciCapacityManagementOccCapacityRequest that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciCapacityManagementOccCapacityRequest to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover">date_expected_capacity_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.details">details</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList">DataOciCapacityManagementOccCapacityRequestDetailsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.namespace">namespace</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId">occ_availability_catalog_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCustomerGroupId">occ_customer_group_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.patchOperations">patch_operations</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList">DataOciCapacityManagementOccCapacityRequestPatchOperationsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.region">region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestState">request_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestType">request_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestIdInput">occ_capacity_request_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestId">occ_capacity_request_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `date_expected_capacity_handover`<sup>Required</sup> <a name="date_expected_capacity_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.dateExpectedCapacityHandover"></a>

```python
date_expected_capacity_handover: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `details`<sup>Required</sup> <a name="details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.details"></a>

```python
details: DataOciCapacityManagementOccCapacityRequestDetailsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList">DataOciCapacityManagementOccCapacityRequestDetailsList</a>

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.namespace"></a>

```python
namespace: str
```

- *Type:* str

---

##### `occ_availability_catalog_id`<sup>Required</sup> <a name="occ_availability_catalog_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occAvailabilityCatalogId"></a>

```python
occ_availability_catalog_id: str
```

- *Type:* str

---

##### `occ_customer_group_id`<sup>Required</sup> <a name="occ_customer_group_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCustomerGroupId"></a>

```python
occ_customer_group_id: str
```

- *Type:* str

---

##### `patch_operations`<sup>Required</sup> <a name="patch_operations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.patchOperations"></a>

```python
patch_operations: DataOciCapacityManagementOccCapacityRequestPatchOperationsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList">DataOciCapacityManagementOccCapacityRequestPatchOperationsList</a>

---

##### `region`<sup>Required</sup> <a name="region" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.region"></a>

```python
region: str
```

- *Type:* str

---

##### `request_state`<sup>Required</sup> <a name="request_state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestState"></a>

```python
request_state: str
```

- *Type:* str

---

##### `request_type`<sup>Required</sup> <a name="request_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.requestType"></a>

```python
request_type: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `occ_capacity_request_id_input`<sup>Optional</sup> <a name="occ_capacity_request_id_input" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestIdInput"></a>

```python
occ_capacity_request_id_input: str
```

- *Type:* str

---

##### `occ_capacity_request_id`<sup>Required</sup> <a name="occ_capacity_request_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.occCapacityRequestId"></a>

```python
occ_capacity_request_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequest.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciCapacityManagementOccCapacityRequestConfig <a name="DataOciCapacityManagementOccCapacityRequestConfig" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  occ_capacity_request_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.occCapacityRequestId">occ_capacity_request_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request#occ_capacity_request_id DataOciCapacityManagementOccCapacityRequest#occ_capacity_request_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `occ_capacity_request_id`<sup>Required</sup> <a name="occ_capacity_request_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestConfig.property.occCapacityRequestId"></a>

```python
occ_capacity_request_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/capacity_management_occ_capacity_request#occ_capacity_request_id DataOciCapacityManagementOccCapacityRequest#occ_capacity_request_id}.

---

### DataOciCapacityManagementOccCapacityRequestDetails <a name="DataOciCapacityManagementOccCapacityRequestDetails" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails()
```


### DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct <a name="DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct()
```


### DataOciCapacityManagementOccCapacityRequestPatchOperations <a name="DataOciCapacityManagementOccCapacityRequestPatchOperations" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList <a name="DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference <a name="DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity">handover_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId">occ_handover_resource_block_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `handover_quantity`<sup>Required</sup> <a name="handover_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.handoverQuantity"></a>

```python
handover_quantity: str
```

- *Type:* str

---

##### `occ_handover_resource_block_id`<sup>Required</sup> <a name="occ_handover_resource_block_id" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.occHandoverResourceBlockId"></a>

```python
occ_handover_resource_block_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStruct</a>

---


### DataOciCapacityManagementOccCapacityRequestDetailsList <a name="DataOciCapacityManagementOccCapacityRequestDetailsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccCapacityRequestDetailsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccCapacityRequestDetailsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestDetailsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity">actual_handover_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList">associated_occ_handover_resource_block_list</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain">availability_domain</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover">date_actual_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover">date_expected_handover</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity">demand_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity">expected_handover_quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName">resource_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType">resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType">source_workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType">workload_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails">DataOciCapacityManagementOccCapacityRequestDetails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `actual_handover_quantity`<sup>Required</sup> <a name="actual_handover_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.actualHandoverQuantity"></a>

```python
actual_handover_quantity: str
```

- *Type:* str

---

##### `associated_occ_handover_resource_block_list`<sup>Required</sup> <a name="associated_occ_handover_resource_block_list" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.associatedOccHandoverResourceBlockList"></a>

```python
associated_occ_handover_resource_block_list: DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList">DataOciCapacityManagementOccCapacityRequestDetailsAssociatedOccHandoverResourceBlockListStructList</a>

---

##### `availability_domain`<sup>Required</sup> <a name="availability_domain" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.availabilityDomain"></a>

```python
availability_domain: str
```

- *Type:* str

---

##### `date_actual_handover`<sup>Required</sup> <a name="date_actual_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateActualHandover"></a>

```python
date_actual_handover: str
```

- *Type:* str

---

##### `date_expected_handover`<sup>Required</sup> <a name="date_expected_handover" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.dateExpectedHandover"></a>

```python
date_expected_handover: str
```

- *Type:* str

---

##### `demand_quantity`<sup>Required</sup> <a name="demand_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.demandQuantity"></a>

```python
demand_quantity: str
```

- *Type:* str

---

##### `expected_handover_quantity`<sup>Required</sup> <a name="expected_handover_quantity" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.expectedHandoverQuantity"></a>

```python
expected_handover_quantity: str
```

- *Type:* str

---

##### `resource_name`<sup>Required</sup> <a name="resource_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceName"></a>

```python
resource_name: str
```

- *Type:* str

---

##### `resource_type`<sup>Required</sup> <a name="resource_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.resourceType"></a>

```python
resource_type: str
```

- *Type:* str

---

##### `source_workload_type`<sup>Required</sup> <a name="source_workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.sourceWorkloadType"></a>

```python
source_workload_type: str
```

- *Type:* str

---

##### `workload_type`<sup>Required</sup> <a name="workload_type" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.workloadType"></a>

```python
workload_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetailsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccCapacityRequestDetails
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestDetails">DataOciCapacityManagementOccCapacityRequestDetails</a>

---


### DataOciCapacityManagementOccCapacityRequestPatchOperationsList <a name="DataOciCapacityManagementOccCapacityRequestPatchOperationsList" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference <a name="DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_capacity_management_occ_capacity_request

dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from">from</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation">operation</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position">position</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem">selected_item</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection">selection</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value">value</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations">DataOciCapacityManagementOccCapacityRequestPatchOperations</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `from`<sup>Required</sup> <a name="from" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.from"></a>

```python
from: str
```

- *Type:* str

---

##### `operation`<sup>Required</sup> <a name="operation" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.operation"></a>

```python
operation: str
```

- *Type:* str

---

##### `position`<sup>Required</sup> <a name="position" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.position"></a>

```python
position: str
```

- *Type:* str

---

##### `selected_item`<sup>Required</sup> <a name="selected_item" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selectedItem"></a>

```python
selected_item: str
```

- *Type:* str

---

##### `selection`<sup>Required</sup> <a name="selection" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.selection"></a>

```python
selection: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.value"></a>

```python
value: StringMap
```

- *Type:* cdktf.StringMap

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperationsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciCapacityManagementOccCapacityRequestPatchOperations
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciCapacityManagementOccCapacityRequest.DataOciCapacityManagementOccCapacityRequestPatchOperations">DataOciCapacityManagementOccCapacityRequestPatchOperations</a>

---



