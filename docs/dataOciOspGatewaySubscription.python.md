# `dataOciOspGatewaySubscription` Submodule <a name="`dataOciOspGatewaySubscription` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOspGatewaySubscription <a name="DataOciOspGatewaySubscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription oci_osp_gateway_subscription}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscription(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  osp_home_region: str,
  subscription_id: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#compartment_id DataOciOspGatewaySubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#osp_home_region DataOciOspGatewaySubscription#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#subscription_id DataOciOspGatewaySubscription#subscription_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.compartmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#compartment_id DataOciOspGatewaySubscription#compartment_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.ospHomeRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#osp_home_region DataOciOspGatewaySubscription#osp_home_region}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#subscription_id DataOciOspGatewaySubscription#subscription_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOspGatewaySubscription resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOspGatewaySubscription resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOspGatewaySubscription to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOspGatewaySubscription that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOspGatewaySubscription to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.billingAddress">billing_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList">DataOciOspGatewaySubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.billToCustAccountId">bill_to_cust_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.email">email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.gsiOrgCode">gsi_org_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.isIntentToPay">is_intent_to_pay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.paymentGateway">payment_gateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.paymentOptions">payment_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.planType">plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.shipToCustAcctRoleId">ship_to_cust_acct_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.shipToCustAcctSiteId">ship_to_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscription">subscription</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList">DataOciOspGatewaySubscriptionSubscriptionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionPlanNumber">subscription_plan_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.taxInfo">tax_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList">DataOciOspGatewaySubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timePersonalToCorporateConv">time_personal_to_corporate_conv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timePlanUpgrade">time_plan_upgrade</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.upgradeState">upgrade_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.upgradeStateDetails">upgrade_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.compartmentIdInput">compartment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.ospHomeRegionInput">osp_home_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.compartmentId">compartment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `billing_address`<sup>Required</sup> <a name="billing_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.billingAddress"></a>

```python
billing_address: DataOciOspGatewaySubscriptionBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList">DataOciOspGatewaySubscriptionBillingAddressList</a>

---

##### `bill_to_cust_account_id`<sup>Required</sup> <a name="bill_to_cust_account_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.billToCustAccountId"></a>

```python
bill_to_cust_account_id: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `email`<sup>Required</sup> <a name="email" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.email"></a>

```python
email: str
```

- *Type:* str

---

##### `gsi_org_code`<sup>Required</sup> <a name="gsi_org_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.gsiOrgCode"></a>

```python
gsi_org_code: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_intent_to_pay`<sup>Required</sup> <a name="is_intent_to_pay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.isIntentToPay"></a>

```python
is_intent_to_pay: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `payment_gateway`<sup>Required</sup> <a name="payment_gateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.paymentGateway"></a>

```python
payment_gateway: DataOciOspGatewaySubscriptionPaymentGatewayList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionPaymentGatewayList</a>

---

##### `payment_options`<sup>Required</sup> <a name="payment_options" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.paymentOptions"></a>

```python
payment_options: DataOciOspGatewaySubscriptionPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionPaymentOptionsList</a>

---

##### `plan_type`<sup>Required</sup> <a name="plan_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

---

##### `ship_to_cust_acct_role_id`<sup>Required</sup> <a name="ship_to_cust_acct_role_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.shipToCustAcctRoleId"></a>

```python
ship_to_cust_acct_role_id: str
```

- *Type:* str

---

##### `ship_to_cust_acct_site_id`<sup>Required</sup> <a name="ship_to_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.shipToCustAcctSiteId"></a>

```python
ship_to_cust_acct_site_id: str
```

- *Type:* str

---

##### `subscription`<sup>Required</sup> <a name="subscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscription"></a>

```python
subscription: DataOciOspGatewaySubscriptionSubscriptionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList">DataOciOspGatewaySubscriptionSubscriptionList</a>

---

##### `subscription_plan_number`<sup>Required</sup> <a name="subscription_plan_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionPlanNumber"></a>

```python
subscription_plan_number: str
```

- *Type:* str

---

##### `tax_info`<sup>Required</sup> <a name="tax_info" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.taxInfo"></a>

```python
tax_info: DataOciOspGatewaySubscriptionTaxInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList">DataOciOspGatewaySubscriptionTaxInfoList</a>

---

##### `time_personal_to_corporate_conv`<sup>Required</sup> <a name="time_personal_to_corporate_conv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timePersonalToCorporateConv"></a>

```python
time_personal_to_corporate_conv: str
```

- *Type:* str

---

##### `time_plan_upgrade`<sup>Required</sup> <a name="time_plan_upgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timePlanUpgrade"></a>

```python
time_plan_upgrade: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `upgrade_state`<sup>Required</sup> <a name="upgrade_state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.upgradeState"></a>

```python
upgrade_state: str
```

- *Type:* str

---

##### `upgrade_state_details`<sup>Required</sup> <a name="upgrade_state_details" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.upgradeStateDetails"></a>

```python
upgrade_state_details: str
```

- *Type:* str

---

##### `compartment_id_input`<sup>Optional</sup> <a name="compartment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.compartmentIdInput"></a>

```python
compartment_id_input: str
```

- *Type:* str

---

##### `osp_home_region_input`<sup>Optional</sup> <a name="osp_home_region_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.ospHomeRegionInput"></a>

```python
osp_home_region_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscription.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOspGatewaySubscriptionBillingAddress <a name="DataOciOspGatewaySubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddress()
```


### DataOciOspGatewaySubscriptionConfig <a name="DataOciOspGatewaySubscriptionConfig" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  compartment_id: str,
  osp_home_region: str,
  subscription_id: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.compartmentId">compartment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#compartment_id DataOciOspGatewaySubscription#compartment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.ospHomeRegion">osp_home_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#osp_home_region DataOciOspGatewaySubscription#osp_home_region}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#subscription_id DataOciOspGatewaySubscription#subscription_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `compartment_id`<sup>Required</sup> <a name="compartment_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.compartmentId"></a>

```python
compartment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#compartment_id DataOciOspGatewaySubscription#compartment_id}.

---

##### `osp_home_region`<sup>Required</sup> <a name="osp_home_region" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.ospHomeRegion"></a>

```python
osp_home_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#osp_home_region DataOciOspGatewaySubscription#osp_home_region}.

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osp_gateway_subscription#subscription_id DataOciOspGatewaySubscription#subscription_id}.

---

### DataOciOspGatewaySubscriptionPaymentGateway <a name="DataOciOspGatewaySubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGateway.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGateway()
```


### DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData()
```


### DataOciOspGatewaySubscriptionPaymentOptions <a name="DataOciOspGatewaySubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptions()
```


### DataOciOspGatewaySubscriptionSubscription <a name="DataOciOspGatewaySubscriptionSubscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscription"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscription.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscription()
```


### DataOciOspGatewaySubscriptionSubscriptionBillingAddress <a name="DataOciOspGatewaySubscriptionSubscriptionBillingAddress" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddress"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddress.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddress()
```


### DataOciOspGatewaySubscriptionSubscriptionPaymentGateway <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGateway"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGateway.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGateway()
```


### DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData()
```


### DataOciOspGatewaySubscriptionSubscriptionPaymentOptions <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentOptions" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptions"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptions.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptions()
```


### DataOciOspGatewaySubscriptionSubscriptionTaxInfo <a name="DataOciOspGatewaySubscriptionSubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfo()
```


### DataOciOspGatewaySubscriptionTaxInfo <a name="DataOciOspGatewaySubscriptionTaxInfo" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfo"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfo.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfo()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciOspGatewaySubscriptionBillingAddressList <a name="DataOciOspGatewaySubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.addressKey">address_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass">contributor_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.departmentName">department_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber">internal_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line1">line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line2">line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line3">line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line4">line4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription">municipal_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode">phone_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription">state_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.streetName">street_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber">street_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddress">DataOciOspGatewaySubscriptionBillingAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_key`<sup>Required</sup> <a name="address_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.addressKey"></a>

```python
address_key: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `contributor_class`<sup>Required</sup> <a name="contributor_class" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```python
contributor_class: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `department_name`<sup>Required</sup> <a name="department_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.departmentName"></a>

```python
department_name: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `internal_number`<sup>Required</sup> <a name="internal_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```python
internal_number: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line1"></a>

```python
line1: str
```

- *Type:* str

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line2"></a>

```python
line2: str
```

- *Type:* str

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line3"></a>

```python
line3: str
```

- *Type:* str

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.line4"></a>

```python
line4: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `municipal_inscription`<sup>Required</sup> <a name="municipal_inscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```python
municipal_inscription: str
```

- *Type:* str

---

##### `phone_country_code`<sup>Required</sup> <a name="phone_country_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```python
phone_country_code: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_inscription`<sup>Required</sup> <a name="state_inscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```python
state_inscription: str
```

- *Type:* str

---

##### `street_name`<sup>Required</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.streetName"></a>

```python
street_name: str
```

- *Type:* str

---

##### `street_number`<sup>Required</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```python
street_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionBillingAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionBillingAddress">DataOciOspGatewaySubscriptionBillingAddress</a>

---


### DataOciOspGatewaySubscriptionPaymentGatewayList <a name="DataOciOspGatewaySubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloud_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promo_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_account_name`<sup>Required</sup> <a name="cloud_account_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```python
cloud_account_name: str
```

- *Type:* str

---

##### `promo_type`<sup>Required</sup> <a name="promo_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```python
promo_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">merchant_defined_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGateway">DataOciOspGatewaySubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `merchant_defined_data`<sup>Required</sup> <a name="merchant_defined_data" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```python
merchant_defined_data: DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentGateway">DataOciOspGatewaySubscriptionPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionPaymentOptionsList <a name="DataOciOspGatewaySubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType">credit_card_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ext_billing_agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits">last_digits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard">name_on_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod">payment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration">time_expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">wallet_instrument_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId">wallet_transaction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptions">DataOciOspGatewaySubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credit_card_type`<sup>Required</sup> <a name="credit_card_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```python
credit_card_type: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `ext_billing_agreement_id`<sup>Required</sup> <a name="ext_billing_agreement_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```python
ext_billing_agreement_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_digits`<sup>Required</sup> <a name="last_digits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```python
last_digits: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name_on_card`<sup>Required</sup> <a name="name_on_card" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```python
name_on_card: str
```

- *Type:* str

---

##### `payment_method`<sup>Required</sup> <a name="payment_method" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```python
payment_method: str
```

- *Type:* str

---

##### `time_expiration`<sup>Required</sup> <a name="time_expiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```python
time_expiration: str
```

- *Type:* str

---

##### `wallet_instrument_id`<sup>Required</sup> <a name="wallet_instrument_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```python
wallet_instrument_id: str
```

- *Type:* str

---

##### `wallet_transaction_id`<sup>Required</sup> <a name="wallet_transaction_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```python
wallet_transaction_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionPaymentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionPaymentOptions">DataOciOspGatewaySubscriptionPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionSubscriptionBillingAddressList <a name="DataOciOspGatewaySubscriptionSubscriptionBillingAddressList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey">address_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city">city</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName">company_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass">contributor_class</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country">country</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county">county</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName">department_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber">internal_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle">job_title</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1">line1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2">line2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3">line3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4">line4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName">middle_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription">municipal_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode">phone_country_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber">phone_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode">postal_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province">province</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state">state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription">state_inscription</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName">street_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber">street_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddress">DataOciOspGatewaySubscriptionSubscriptionBillingAddress</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `address_key`<sup>Required</sup> <a name="address_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.addressKey"></a>

```python
address_key: str
```

- *Type:* str

---

##### `city`<sup>Required</sup> <a name="city" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.city"></a>

```python
city: str
```

- *Type:* str

---

##### `company_name`<sup>Required</sup> <a name="company_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.companyName"></a>

```python
company_name: str
```

- *Type:* str

---

##### `contributor_class`<sup>Required</sup> <a name="contributor_class" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.contributorClass"></a>

```python
contributor_class: str
```

- *Type:* str

---

##### `country`<sup>Required</sup> <a name="country" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.country"></a>

```python
country: str
```

- *Type:* str

---

##### `county`<sup>Required</sup> <a name="county" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.county"></a>

```python
county: str
```

- *Type:* str

---

##### `department_name`<sup>Required</sup> <a name="department_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.departmentName"></a>

```python
department_name: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `internal_number`<sup>Required</sup> <a name="internal_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalNumber"></a>

```python
internal_number: str
```

- *Type:* str

---

##### `job_title`<sup>Required</sup> <a name="job_title" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.jobTitle"></a>

```python
job_title: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `line1`<sup>Required</sup> <a name="line1" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line1"></a>

```python
line1: str
```

- *Type:* str

---

##### `line2`<sup>Required</sup> <a name="line2" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line2"></a>

```python
line2: str
```

- *Type:* str

---

##### `line3`<sup>Required</sup> <a name="line3" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line3"></a>

```python
line3: str
```

- *Type:* str

---

##### `line4`<sup>Required</sup> <a name="line4" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.line4"></a>

```python
line4: str
```

- *Type:* str

---

##### `middle_name`<sup>Required</sup> <a name="middle_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.middleName"></a>

```python
middle_name: str
```

- *Type:* str

---

##### `municipal_inscription`<sup>Required</sup> <a name="municipal_inscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.municipalInscription"></a>

```python
municipal_inscription: str
```

- *Type:* str

---

##### `phone_country_code`<sup>Required</sup> <a name="phone_country_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneCountryCode"></a>

```python
phone_country_code: str
```

- *Type:* str

---

##### `phone_number`<sup>Required</sup> <a name="phone_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.phoneNumber"></a>

```python
phone_number: str
```

- *Type:* str

---

##### `postal_code`<sup>Required</sup> <a name="postal_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.postalCode"></a>

```python
postal_code: str
```

- *Type:* str

---

##### `province`<sup>Required</sup> <a name="province" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.province"></a>

```python
province: str
```

- *Type:* str

---

##### `state`<sup>Required</sup> <a name="state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.state"></a>

```python
state: str
```

- *Type:* str

---

##### `state_inscription`<sup>Required</sup> <a name="state_inscription" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.stateInscription"></a>

```python
state_inscription: str
```

- *Type:* str

---

##### `street_name`<sup>Required</sup> <a name="street_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetName"></a>

```python
street_name: str
```

- *Type:* str

---

##### `street_number`<sup>Required</sup> <a name="street_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.streetNumber"></a>

```python
street_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionSubscriptionBillingAddress
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddress">DataOciOspGatewaySubscriptionSubscriptionBillingAddress</a>

---


### DataOciOspGatewaySubscriptionSubscriptionList <a name="DataOciOspGatewaySubscriptionSubscriptionList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionSubscriptionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionSubscriptionOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.accountType">account_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress">billing_address</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionSubscriptionBillingAddressList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId">bill_to_cust_account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode">currency_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode">gsi_org_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay">is_intent_to_pay</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.languageCode">language_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.organizationId">organization_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway">payment_gateway</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions">payment_options</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.planType">plan_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId">ship_to_cust_acct_role_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId">ship_to_cust_acct_site_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber">subscription_plan_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo">tax_info</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionSubscriptionTaxInfoList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv">time_personal_to_corporate_conv</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade">time_plan_upgrade</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState">upgrade_state</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails">upgrade_state_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscription">DataOciOspGatewaySubscriptionSubscription</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `account_type`<sup>Required</sup> <a name="account_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.accountType"></a>

```python
account_type: str
```

- *Type:* str

---

##### `billing_address`<sup>Required</sup> <a name="billing_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.billingAddress"></a>

```python
billing_address: DataOciOspGatewaySubscriptionSubscriptionBillingAddressList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionBillingAddressList">DataOciOspGatewaySubscriptionSubscriptionBillingAddressList</a>

---

##### `bill_to_cust_account_id`<sup>Required</sup> <a name="bill_to_cust_account_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.billToCustAccountId"></a>

```python
bill_to_cust_account_id: str
```

- *Type:* str

---

##### `currency_code`<sup>Required</sup> <a name="currency_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.currencyCode"></a>

```python
currency_code: str
```

- *Type:* str

---

##### `gsi_org_code`<sup>Required</sup> <a name="gsi_org_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.gsiOrgCode"></a>

```python
gsi_org_code: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `is_intent_to_pay`<sup>Required</sup> <a name="is_intent_to_pay" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.isIntentToPay"></a>

```python
is_intent_to_pay: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `language_code`<sup>Required</sup> <a name="language_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.languageCode"></a>

```python
language_code: str
```

- *Type:* str

---

##### `organization_id`<sup>Required</sup> <a name="organization_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.organizationId"></a>

```python
organization_id: str
```

- *Type:* str

---

##### `payment_gateway`<sup>Required</sup> <a name="payment_gateway" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.paymentGateway"></a>

```python
payment_gateway: DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList</a>

---

##### `payment_options`<sup>Required</sup> <a name="payment_options" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.paymentOptions"></a>

```python
payment_options: DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList">DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList</a>

---

##### `plan_type`<sup>Required</sup> <a name="plan_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.planType"></a>

```python
plan_type: str
```

- *Type:* str

---

##### `ship_to_cust_acct_role_id`<sup>Required</sup> <a name="ship_to_cust_acct_role_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctRoleId"></a>

```python
ship_to_cust_acct_role_id: str
```

- *Type:* str

---

##### `ship_to_cust_acct_site_id`<sup>Required</sup> <a name="ship_to_cust_acct_site_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.shipToCustAcctSiteId"></a>

```python
ship_to_cust_acct_site_id: str
```

- *Type:* str

---

##### `subscription_plan_number`<sup>Required</sup> <a name="subscription_plan_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.subscriptionPlanNumber"></a>

```python
subscription_plan_number: str
```

- *Type:* str

---

##### `tax_info`<sup>Required</sup> <a name="tax_info" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.taxInfo"></a>

```python
tax_info: DataOciOspGatewaySubscriptionSubscriptionTaxInfoList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList">DataOciOspGatewaySubscriptionSubscriptionTaxInfoList</a>

---

##### `time_personal_to_corporate_conv`<sup>Required</sup> <a name="time_personal_to_corporate_conv" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timePersonalToCorporateConv"></a>

```python
time_personal_to_corporate_conv: str
```

- *Type:* str

---

##### `time_plan_upgrade`<sup>Required</sup> <a name="time_plan_upgrade" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timePlanUpgrade"></a>

```python
time_plan_upgrade: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `upgrade_state`<sup>Required</sup> <a name="upgrade_state" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.upgradeState"></a>

```python
upgrade_state: str
```

- *Type:* str

---

##### `upgrade_state_details`<sup>Required</sup> <a name="upgrade_state_details" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.upgradeStateDetails"></a>

```python
upgrade_state_details: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionSubscription
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscription">DataOciOspGatewaySubscriptionSubscription</a>

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName">cloud_account_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType">promo_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `cloud_account_name`<sup>Required</sup> <a name="cloud_account_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.cloudAccountName"></a>

```python
cloud_account_name: str
```

- *Type:* str

---

##### `promo_type`<sup>Required</sup> <a name="promo_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.promoType"></a>

```python
promo_type: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedData</a>

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData">merchant_defined_data</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionSubscriptionPaymentGateway</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `merchant_defined_data`<sup>Required</sup> <a name="merchant_defined_data" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.merchantDefinedData"></a>

```python
merchant_defined_data: DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList">DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayMerchantDefinedDataList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGatewayOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionSubscriptionPaymentGateway
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentGateway">DataOciOspGatewaySubscriptionSubscriptionPaymentGateway</a>

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType">credit_card_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress">email_address</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId">ext_billing_agreement_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits">last_digits</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard">name_on_card</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod">payment_method</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration">time_expiration</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId">wallet_instrument_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId">wallet_transaction_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionSubscriptionPaymentOptions</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `credit_card_type`<sup>Required</sup> <a name="credit_card_type" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.creditCardType"></a>

```python
credit_card_type: str
```

- *Type:* str

---

##### `email_address`<sup>Required</sup> <a name="email_address" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.emailAddress"></a>

```python
email_address: str
```

- *Type:* str

---

##### `ext_billing_agreement_id`<sup>Required</sup> <a name="ext_billing_agreement_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.extBillingAgreementId"></a>

```python
ext_billing_agreement_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_digits`<sup>Required</sup> <a name="last_digits" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastDigits"></a>

```python
last_digits: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `name_on_card`<sup>Required</sup> <a name="name_on_card" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.nameOnCard"></a>

```python
name_on_card: str
```

- *Type:* str

---

##### `payment_method`<sup>Required</sup> <a name="payment_method" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.paymentMethod"></a>

```python
payment_method: str
```

- *Type:* str

---

##### `time_expiration`<sup>Required</sup> <a name="time_expiration" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.timeExpiration"></a>

```python
time_expiration: str
```

- *Type:* str

---

##### `wallet_instrument_id`<sup>Required</sup> <a name="wallet_instrument_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletInstrumentId"></a>

```python
wallet_instrument_id: str
```

- *Type:* str

---

##### `wallet_transaction_id`<sup>Required</sup> <a name="wallet_transaction_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.walletTransactionId"></a>

```python
wallet_transaction_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptionsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionSubscriptionPaymentOptions
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionPaymentOptions">DataOciOspGatewaySubscriptionSubscriptionPaymentOptions</a>

---


### DataOciOspGatewaySubscriptionSubscriptionTaxInfoList <a name="DataOciOspGatewaySubscriptionSubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode">no_tax_reason_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">no_tax_reason_code_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj">tax_cnpj</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId">tax_payer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber">tax_reg_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfo">DataOciOspGatewaySubscriptionSubscriptionTaxInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `no_tax_reason_code`<sup>Required</sup> <a name="no_tax_reason_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```python
no_tax_reason_code: str
```

- *Type:* str

---

##### `no_tax_reason_code_details`<sup>Required</sup> <a name="no_tax_reason_code_details" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```python
no_tax_reason_code_details: str
```

- *Type:* str

---

##### `tax_cnpj`<sup>Required</sup> <a name="tax_cnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```python
tax_cnpj: str
```

- *Type:* str

---

##### `tax_payer_id`<sup>Required</sup> <a name="tax_payer_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```python
tax_payer_id: str
```

- *Type:* str

---

##### `tax_reg_number`<sup>Required</sup> <a name="tax_reg_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```python
tax_reg_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionSubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionSubscriptionTaxInfo">DataOciOspGatewaySubscriptionSubscriptionTaxInfo</a>

---


### DataOciOspGatewaySubscriptionTaxInfoList <a name="DataOciOspGatewaySubscriptionTaxInfoList" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciOspGatewaySubscriptionTaxInfoOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciOspGatewaySubscriptionTaxInfoOutputReference <a name="DataOciOspGatewaySubscriptionTaxInfoOutputReference" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osp_gateway_subscription

dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.giro">giro</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode">no_tax_reason_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails">no_tax_reason_code_details</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj">tax_cnpj</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId">tax_payer_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber">tax_reg_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfo">DataOciOspGatewaySubscriptionTaxInfo</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `giro`<sup>Required</sup> <a name="giro" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.giro"></a>

```python
giro: str
```

- *Type:* str

---

##### `no_tax_reason_code`<sup>Required</sup> <a name="no_tax_reason_code" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCode"></a>

```python
no_tax_reason_code: str
```

- *Type:* str

---

##### `no_tax_reason_code_details`<sup>Required</sup> <a name="no_tax_reason_code_details" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.noTaxReasonCodeDetails"></a>

```python
no_tax_reason_code_details: str
```

- *Type:* str

---

##### `tax_cnpj`<sup>Required</sup> <a name="tax_cnpj" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxCnpj"></a>

```python
tax_cnpj: str
```

- *Type:* str

---

##### `tax_payer_id`<sup>Required</sup> <a name="tax_payer_id" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxPayerId"></a>

```python
tax_payer_id: str
```

- *Type:* str

---

##### `tax_reg_number`<sup>Required</sup> <a name="tax_reg_number" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.taxRegNumber"></a>

```python
tax_reg_number: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfoOutputReference.property.internalValue"></a>

```python
internal_value: DataOciOspGatewaySubscriptionTaxInfo
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciOspGatewaySubscription.DataOciOspGatewaySubscriptionTaxInfo">DataOciOspGatewaySubscriptionTaxInfo</a>

---



