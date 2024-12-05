# `dataOciOpsiOperationsInsightsPrivateEndpoint` Submodule <a name="`dataOciOpsiOperationsInsightsPrivateEndpoint` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOpsiOperationsInsightsPrivateEndpoint <a name="DataOciOpsiOperationsInsightsPrivateEndpoint" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoint oci_opsi_operations_insights_private_endpoint}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_private_endpoint

dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  operations_insights_private_endpoint_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.operationsInsightsPrivateEndpointId">operations_insights_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoint#operations_insights_private_endpoint_id DataOciOpsiOperationsInsightsPrivateEndpoint#operations_insights_private_endpoint_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `operations_insights_private_endpoint_id`<sup>Required</sup> <a name="operations_insights_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.Initializer.parameter.operationsInsightsPrivateEndpointId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoint#operations_insights_private_endpoint_id DataOciOpsiOperationsInsightsPrivateEndpoint#operations_insights_private_endpoint_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOpsiOperationsInsightsPrivateEndpoint resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_private_endpoint

dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_private_endpoint

dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_private_endpoint

dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_private_endpoint

dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOpsiOperationsInsightsPrivateEndpoint resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOpsiOperationsInsightsPrivateEndpoint to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOpsiOperationsInsightsPrivateEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOpsiOperationsInsightsPrivateEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.isUsedForRacDbs">is_used_for_rac_dbs</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.nsgIds">nsg_ids</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.privateEndpointStatusDetails">private_endpoint_status_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.privateIp">private_ip</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.subnetId">subnet_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.systemTags">system_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.vcnId">vcn_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.operationsInsightsPrivateEndpointIdInput">operations_insights_private_endpoint_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.operationsInsightsPrivateEndpointId">operations_insights_private_endpoint_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_used_for_rac_dbs`<sup>Required</sup> <a name="is_used_for_rac_dbs" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.isUsedForRacDbs"></a>

```python
is_used_for_rac_dbs: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `nsg_ids`<sup>Required</sup> <a name="nsg_ids" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.nsgIds"></a>

```python
nsg_ids: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `private_endpoint_status_details`<sup>Required</sup> <a name="private_endpoint_status_details" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.privateEndpointStatusDetails"></a>

```python
private_endpoint_status_details: str
```

- *Type:* str

---

##### `private_ip`<sup>Required</sup> <a name="private_ip" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.privateIp"></a>

```python
private_ip: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `subnet_id`<sup>Required</sup> <a name="subnet_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.subnetId"></a>

```python
subnet_id: str
```

- *Type:* str

---

##### `system_tags`<sup>Required</sup> <a name="system_tags" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.systemTags"></a>

```python
system_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `vcn_id`<sup>Required</sup> <a name="vcn_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.vcnId"></a>

```python
vcn_id: str
```

- *Type:* str

---

##### `operations_insights_private_endpoint_id_input`<sup>Optional</sup> <a name="operations_insights_private_endpoint_id_input" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.operationsInsightsPrivateEndpointIdInput"></a>

```python
operations_insights_private_endpoint_id_input: str
```

- *Type:* str

---

##### `operations_insights_private_endpoint_id`<sup>Required</sup> <a name="operations_insights_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.operationsInsightsPrivateEndpointId"></a>

```python
operations_insights_private_endpoint_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpoint.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOpsiOperationsInsightsPrivateEndpointConfig <a name="DataOciOpsiOperationsInsightsPrivateEndpointConfig" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_opsi_operations_insights_private_endpoint

dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  operations_insights_private_endpoint_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.operationsInsightsPrivateEndpointId">operations_insights_private_endpoint_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoint#operations_insights_private_endpoint_id DataOciOpsiOperationsInsightsPrivateEndpoint#operations_insights_private_endpoint_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `operations_insights_private_endpoint_id`<sup>Required</sup> <a name="operations_insights_private_endpoint_id" id="rhizo-co-terraform-provider-oci.dataOciOpsiOperationsInsightsPrivateEndpoint.DataOciOpsiOperationsInsightsPrivateEndpointConfig.property.operationsInsightsPrivateEndpointId"></a>

```python
operations_insights_private_endpoint_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/opsi_operations_insights_private_endpoint#operations_insights_private_endpoint_id DataOciOpsiOperationsInsightsPrivateEndpoint#operations_insights_private_endpoint_id}.

---


