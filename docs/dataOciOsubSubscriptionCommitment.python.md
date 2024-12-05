# `dataOciOsubSubscriptionCommitment` Submodule <a name="`dataOciOsubSubscriptionCommitment` Submodule" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciOsubSubscriptionCommitment <a name="DataOciOsubSubscriptionCommitment" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment oci_osub_subscription_commitment}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitment

dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  commitment_id: str,
  id: str = None,
  x_one_gateway_subscription_id: str = None,
  x_one_origin_region: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.commitmentId">commitment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#commitment_id DataOciOsubSubscriptionCommitment#commitment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#id DataOciOsubSubscriptionCommitment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.xOneGatewaySubscriptionId">x_one_gateway_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitment#x_one_gateway_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_origin_region DataOciOsubSubscriptionCommitment#x_one_origin_region}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `commitment_id`<sup>Required</sup> <a name="commitment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.commitmentId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#commitment_id DataOciOsubSubscriptionCommitment#commitment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#id DataOciOsubSubscriptionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `x_one_gateway_subscription_id`<sup>Optional</sup> <a name="x_one_gateway_subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.xOneGatewaySubscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitment#x_one_gateway_subscription_id}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.Initializer.parameter.xOneOriginRegion"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_origin_region DataOciOsubSubscriptionCommitment#x_one_origin_region}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetXOneGatewaySubscriptionId">reset_x_one_gateway_subscription_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetXOneOriginRegion">reset_x_one_origin_region</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_x_one_gateway_subscription_id` <a name="reset_x_one_gateway_subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetXOneGatewaySubscriptionId"></a>

```python
def reset_x_one_gateway_subscription_id() -> None
```

##### `reset_x_one_origin_region` <a name="reset_x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.resetXOneOriginRegion"></a>

```python
def reset_x_one_origin_region() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciOsubSubscriptionCommitment resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitment

dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitment

dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitment

dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitment

dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciOsubSubscriptionCommitment resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciOsubSubscriptionCommitment to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciOsubSubscriptionCommitment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciOsubSubscriptionCommitment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.availableAmount">available_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.fundedAllocationValue">funded_allocation_value</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.quantity">quantity</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.timeEnd">time_end</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.timeStart">time_start</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.usedAmount">used_amount</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.commitmentIdInput">commitment_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneGatewaySubscriptionIdInput">x_one_gateway_subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneOriginRegionInput">x_one_origin_region_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.commitmentId">commitment_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneGatewaySubscriptionId">x_one_gateway_subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `available_amount`<sup>Required</sup> <a name="available_amount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.availableAmount"></a>

```python
available_amount: str
```

- *Type:* str

---

##### `funded_allocation_value`<sup>Required</sup> <a name="funded_allocation_value" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.fundedAllocationValue"></a>

```python
funded_allocation_value: str
```

- *Type:* str

---

##### `quantity`<sup>Required</sup> <a name="quantity" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.quantity"></a>

```python
quantity: str
```

- *Type:* str

---

##### `time_end`<sup>Required</sup> <a name="time_end" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.timeEnd"></a>

```python
time_end: str
```

- *Type:* str

---

##### `time_start`<sup>Required</sup> <a name="time_start" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.timeStart"></a>

```python
time_start: str
```

- *Type:* str

---

##### `used_amount`<sup>Required</sup> <a name="used_amount" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.usedAmount"></a>

```python
used_amount: str
```

- *Type:* str

---

##### `commitment_id_input`<sup>Optional</sup> <a name="commitment_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.commitmentIdInput"></a>

```python
commitment_id_input: str
```

- *Type:* str

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `x_one_gateway_subscription_id_input`<sup>Optional</sup> <a name="x_one_gateway_subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneGatewaySubscriptionIdInput"></a>

```python
x_one_gateway_subscription_id_input: str
```

- *Type:* str

---

##### `x_one_origin_region_input`<sup>Optional</sup> <a name="x_one_origin_region_input" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneOriginRegionInput"></a>

```python
x_one_origin_region_input: str
```

- *Type:* str

---

##### `commitment_id`<sup>Required</sup> <a name="commitment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.commitmentId"></a>

```python
commitment_id: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `x_one_gateway_subscription_id`<sup>Required</sup> <a name="x_one_gateway_subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneGatewaySubscriptionId"></a>

```python
x_one_gateway_subscription_id: str
```

- *Type:* str

---

##### `x_one_origin_region`<sup>Required</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitment.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciOsubSubscriptionCommitmentConfig <a name="DataOciOsubSubscriptionCommitmentConfig" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_osub_subscription_commitment

dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  commitment_id: str,
  id: str = None,
  x_one_gateway_subscription_id: str = None,
  x_one_origin_region: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.commitmentId">commitment_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#commitment_id DataOciOsubSubscriptionCommitment#commitment_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#id DataOciOsubSubscriptionCommitment#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.xOneGatewaySubscriptionId">x_one_gateway_subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitment#x_one_gateway_subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.xOneOriginRegion">x_one_origin_region</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_origin_region DataOciOsubSubscriptionCommitment#x_one_origin_region}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `commitment_id`<sup>Required</sup> <a name="commitment_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.commitmentId"></a>

```python
commitment_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#commitment_id DataOciOsubSubscriptionCommitment#commitment_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#id DataOciOsubSubscriptionCommitment#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `x_one_gateway_subscription_id`<sup>Optional</sup> <a name="x_one_gateway_subscription_id" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.xOneGatewaySubscriptionId"></a>

```python
x_one_gateway_subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_gateway_subscription_id DataOciOsubSubscriptionCommitment#x_one_gateway_subscription_id}.

---

##### `x_one_origin_region`<sup>Optional</sup> <a name="x_one_origin_region" id="rhizo-co-terraform-provider-oci.dataOciOsubSubscriptionCommitment.DataOciOsubSubscriptionCommitmentConfig.property.xOneOriginRegion"></a>

```python
x_one_origin_region: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/osub_subscription_commitment#x_one_origin_region DataOciOsubSubscriptionCommitment#x_one_origin_region}.

---



