# `dataOciUsageProxySubscriptionProduct` Submodule <a name="`dataOciUsageProxySubscriptionProduct` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxySubscriptionProduct <a name="DataOciUsageProxySubscriptionProduct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product oci_usage_proxy_subscription_product}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_product

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subscription_id: str,
  tenancy_id: str,
  usage_period_key: str,
  id: str = None,
  producttype: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#subscription_id DataOciUsageProxySubscriptionProduct#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#tenancy_id DataOciUsageProxySubscriptionProduct#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.usagePeriodKey">usage_period_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#usage_period_key DataOciUsageProxySubscriptionProduct#usage_period_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#id DataOciUsageProxySubscriptionProduct#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.producttype">producttype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#producttype DataOciUsageProxySubscriptionProduct#producttype}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#subscription_id DataOciUsageProxySubscriptionProduct#subscription_id}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.tenancyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#tenancy_id DataOciUsageProxySubscriptionProduct#tenancy_id}.

---

##### `usage_period_key`<sup>Required</sup> <a name="usage_period_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.usagePeriodKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#usage_period_key DataOciUsageProxySubscriptionProduct#usage_period_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#id DataOciUsageProxySubscriptionProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `producttype`<sup>Optional</sup> <a name="producttype" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.Initializer.parameter.producttype"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#producttype DataOciUsageProxySubscriptionProduct#producttype}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetProducttype">reset_producttype</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_producttype` <a name="reset_producttype" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.resetProducttype"></a>

```python
def reset_producttype() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciUsageProxySubscriptionProduct resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_product

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_product

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_product

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_product

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciUsageProxySubscriptionProduct resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciUsageProxySubscriptionProduct to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciUsageProxySubscriptionProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxySubscriptionProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList">DataOciUsageProxySubscriptionProductItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttypeInput">producttype_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyIdInput">tenancy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKeyInput">usage_period_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttype">producttype</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKey">usage_period_key</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.items"></a>

```python
items: DataOciUsageProxySubscriptionProductItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList">DataOciUsageProxySubscriptionProductItemsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `producttype_input`<sup>Optional</sup> <a name="producttype_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttypeInput"></a>

```python
producttype_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenancy_id_input`<sup>Optional</sup> <a name="tenancy_id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyIdInput"></a>

```python
tenancy_id_input: str
```

- *Type:* str

---

##### `usage_period_key_input`<sup>Optional</sup> <a name="usage_period_key_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKeyInput"></a>

```python
usage_period_key_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `producttype`<sup>Required</sup> <a name="producttype" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.producttype"></a>

```python
producttype: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `usage_period_key`<sup>Required</sup> <a name="usage_period_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.usagePeriodKey"></a>

```python
usage_period_key: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProduct.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxySubscriptionProductConfig <a name="DataOciUsageProxySubscriptionProductConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_product

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subscription_id: str,
  tenancy_id: str,
  usage_period_key: str,
  id: str = None,
  producttype: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#subscription_id DataOciUsageProxySubscriptionProduct#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#tenancy_id DataOciUsageProxySubscriptionProduct#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.usagePeriodKey">usage_period_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#usage_period_key DataOciUsageProxySubscriptionProduct#usage_period_key}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#id DataOciUsageProxySubscriptionProduct#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.producttype">producttype</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#producttype DataOciUsageProxySubscriptionProduct#producttype}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#subscription_id DataOciUsageProxySubscriptionProduct#subscription_id}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#tenancy_id DataOciUsageProxySubscriptionProduct#tenancy_id}.

---

##### `usage_period_key`<sup>Required</sup> <a name="usage_period_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.usagePeriodKey"></a>

```python
usage_period_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#usage_period_key DataOciUsageProxySubscriptionProduct#usage_period_key}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#id DataOciUsageProxySubscriptionProduct#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `producttype`<sup>Optional</sup> <a name="producttype" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductConfig.property.producttype"></a>

```python
producttype: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_product#producttype DataOciUsageProxySubscriptionProduct#producttype}.

---

### DataOciUsageProxySubscriptionProductItems <a name="DataOciUsageProxySubscriptionProductItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_product

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxySubscriptionProductItemsList <a name="DataOciUsageProxySubscriptionProductItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_product

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxySubscriptionProductItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxySubscriptionProductItemsOutputReference <a name="DataOciUsageProxySubscriptionProductItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_product

dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.earnedRewards">earned_rewards</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.isEligibleToEarnRewards">is_eligible_to_earn_rewards</a></code> | <code>cdktf.IResolvable</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productName">product_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productNumber">product_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.usageAmount">usage_amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems">DataOciUsageProxySubscriptionProductItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `earned_rewards`<sup>Required</sup> <a name="earned_rewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.earnedRewards"></a>

```python
earned_rewards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `is_eligible_to_earn_rewards`<sup>Required</sup> <a name="is_eligible_to_earn_rewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.isEligibleToEarnRewards"></a>

```python
is_eligible_to_earn_rewards: IResolvable
```

- *Type:* cdktf.IResolvable

---

##### `product_name`<sup>Required</sup> <a name="product_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productName"></a>

```python
product_name: str
```

- *Type:* str

---

##### `product_number`<sup>Required</sup> <a name="product_number" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.productNumber"></a>

```python
product_number: str
```

- *Type:* str

---

##### `usage_amount`<sup>Required</sup> <a name="usage_amount" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.usageAmount"></a>

```python
usage_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxySubscriptionProductItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionProduct.DataOciUsageProxySubscriptionProductItems">DataOciUsageProxySubscriptionProductItems</a>

---



