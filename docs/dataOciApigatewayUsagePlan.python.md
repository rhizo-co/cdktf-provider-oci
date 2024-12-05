# `dataOciApigatewayUsagePlan` Submodule <a name="`dataOciApigatewayUsagePlan` Submodule" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciApigatewayUsagePlan <a name="DataOciApigatewayUsagePlan" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plan oci_apigateway_usage_plan}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  usage_plan_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.usagePlanId">usage_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plan#usage_plan_id DataOciApigatewayUsagePlan#usage_plan_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `usage_plan_id`<sup>Required</sup> <a name="usage_plan_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.Initializer.parameter.usagePlanId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plan#usage_plan_id DataOciApigatewayUsagePlan#usage_plan_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciApigatewayUsagePlan resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciApigatewayUsagePlan resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciApigatewayUsagePlan to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciApigatewayUsagePlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciApigatewayUsagePlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.definedTags">defined_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.displayName">display_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.entitlements">entitlements</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList">DataOciApigatewayUsagePlanEntitlementsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.freeformTags">freeform_tags</a></code> | <code>cdktf.StringMap</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.lifecycleDetails">lifecycle_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.timeCreated">time_created</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.timeUpdated">time_updated</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.usagePlanIdInput">usage_plan_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.usagePlanId">usage_plan_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `defined_tags`<sup>Required</sup> <a name="defined_tags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.definedTags"></a>

```python
defined_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `display_name`<sup>Required</sup> <a name="display_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.displayName"></a>

```python
display_name: str
```

- *Type:* str

---

##### `entitlements`<sup>Required</sup> <a name="entitlements" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.entitlements"></a>

```python
entitlements: DataOciApigatewayUsagePlanEntitlementsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList">DataOciApigatewayUsagePlanEntitlementsList</a>

---

##### `freeform_tags`<sup>Required</sup> <a name="freeform_tags" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.freeformTags"></a>

```python
freeform_tags: StringMap
```

- *Type:* cdktf.StringMap

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `lifecycle_details`<sup>Required</sup> <a name="lifecycle_details" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.lifecycleDetails"></a>

```python
lifecycle_details: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `time_created`<sup>Required</sup> <a name="time_created" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.timeCreated"></a>

```python
time_created: str
```

- *Type:* str

---

##### `time_updated`<sup>Required</sup> <a name="time_updated" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.timeUpdated"></a>

```python
time_updated: str
```

- *Type:* str

---

##### `usage_plan_id_input`<sup>Optional</sup> <a name="usage_plan_id_input" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.usagePlanIdInput"></a>

```python
usage_plan_id_input: str
```

- *Type:* str

---

##### `usage_plan_id`<sup>Required</sup> <a name="usage_plan_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.usagePlanId"></a>

```python
usage_plan_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlan.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciApigatewayUsagePlanConfig <a name="DataOciApigatewayUsagePlanConfig" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  usage_plan_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.usagePlanId">usage_plan_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plan#usage_plan_id DataOciApigatewayUsagePlan#usage_plan_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `usage_plan_id`<sup>Required</sup> <a name="usage_plan_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanConfig.property.usagePlanId"></a>

```python
usage_plan_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/apigateway_usage_plan#usage_plan_id DataOciApigatewayUsagePlan#usage_plan_id}.

---

### DataOciApigatewayUsagePlanEntitlements <a name="DataOciApigatewayUsagePlanEntitlements" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlements"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlements.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlements()
```


### DataOciApigatewayUsagePlanEntitlementsQuota <a name="DataOciApigatewayUsagePlanEntitlementsQuota" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuota"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuota.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuota()
```


### DataOciApigatewayUsagePlanEntitlementsRateLimit <a name="DataOciApigatewayUsagePlanEntitlementsRateLimit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimit"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimit.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimit()
```


### DataOciApigatewayUsagePlanEntitlementsTargets <a name="DataOciApigatewayUsagePlanEntitlementsTargets" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargets"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargets.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargets()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciApigatewayUsagePlanEntitlementsList <a name="DataOciApigatewayUsagePlanEntitlementsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApigatewayUsagePlanEntitlementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApigatewayUsagePlanEntitlementsOutputReference <a name="DataOciApigatewayUsagePlanEntitlementsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.description">description</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.quota">quota</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList">DataOciApigatewayUsagePlanEntitlementsQuotaList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.rateLimit">rate_limit</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList">DataOciApigatewayUsagePlanEntitlementsRateLimitList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.targets">targets</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList">DataOciApigatewayUsagePlanEntitlementsTargetsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlements">DataOciApigatewayUsagePlanEntitlements</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `description`<sup>Required</sup> <a name="description" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.description"></a>

```python
description: str
```

- *Type:* str

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `quota`<sup>Required</sup> <a name="quota" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.quota"></a>

```python
quota: DataOciApigatewayUsagePlanEntitlementsQuotaList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList">DataOciApigatewayUsagePlanEntitlementsQuotaList</a>

---

##### `rate_limit`<sup>Required</sup> <a name="rate_limit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.rateLimit"></a>

```python
rate_limit: DataOciApigatewayUsagePlanEntitlementsRateLimitList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList">DataOciApigatewayUsagePlanEntitlementsRateLimitList</a>

---

##### `targets`<sup>Required</sup> <a name="targets" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.targets"></a>

```python
targets: DataOciApigatewayUsagePlanEntitlementsTargetsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList">DataOciApigatewayUsagePlanEntitlementsTargetsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApigatewayUsagePlanEntitlements
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlements">DataOciApigatewayUsagePlanEntitlements</a>

---


### DataOciApigatewayUsagePlanEntitlementsQuotaList <a name="DataOciApigatewayUsagePlanEntitlementsQuotaList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference <a name="DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.operationOnBreach">operation_on_breach</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.resetPolicy">reset_policy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuota">DataOciApigatewayUsagePlanEntitlementsQuota</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `operation_on_breach`<sup>Required</sup> <a name="operation_on_breach" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.operationOnBreach"></a>

```python
operation_on_breach: str
```

- *Type:* str

---

##### `reset_policy`<sup>Required</sup> <a name="reset_policy" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.resetPolicy"></a>

```python
reset_policy: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuotaOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApigatewayUsagePlanEntitlementsQuota
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsQuota">DataOciApigatewayUsagePlanEntitlementsQuota</a>

---


### DataOciApigatewayUsagePlanEntitlementsRateLimitList <a name="DataOciApigatewayUsagePlanEntitlementsRateLimitList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference <a name="DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.unit">unit</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.value">value</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimit">DataOciApigatewayUsagePlanEntitlementsRateLimit</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `unit`<sup>Required</sup> <a name="unit" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.unit"></a>

```python
unit: str
```

- *Type:* str

---

##### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.value"></a>

```python
value: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimitOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApigatewayUsagePlanEntitlementsRateLimit
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsRateLimit">DataOciApigatewayUsagePlanEntitlementsRateLimit</a>

---


### DataOciApigatewayUsagePlanEntitlementsTargetsList <a name="DataOciApigatewayUsagePlanEntitlementsTargetsList" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference <a name="DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_apigateway_usage_plan

dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.property.deploymentId">deployment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargets">DataOciApigatewayUsagePlanEntitlementsTargets</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `deployment_id`<sup>Required</sup> <a name="deployment_id" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.property.deploymentId"></a>

```python
deployment_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargetsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciApigatewayUsagePlanEntitlementsTargets
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciApigatewayUsagePlan.DataOciApigatewayUsagePlanEntitlementsTargets">DataOciApigatewayUsagePlanEntitlementsTargets</a>

---



