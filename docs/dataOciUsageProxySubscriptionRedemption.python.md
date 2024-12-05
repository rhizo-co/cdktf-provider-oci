# `dataOciUsageProxySubscriptionRedemption` Submodule <a name="`dataOciUsageProxySubscriptionRedemption` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxySubscriptionRedemption <a name="DataOciUsageProxySubscriptionRedemption" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption oci_usage_proxy_subscription_redemption}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redemption

dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption(
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
  id: str = None,
  time_redeemed_greater_than_or_equal_to: str = None,
  time_redeemed_less_than: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#subscription_id DataOciUsageProxySubscriptionRedemption#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#tenancy_id DataOciUsageProxySubscriptionRedemption#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#id DataOciUsageProxySubscriptionRedemption#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.timeRedeemedGreaterThanOrEqualTo">time_redeemed_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_greater_than_or_equal_to DataOciUsageProxySubscriptionRedemption#time_redeemed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.timeRedeemedLessThan">time_redeemed_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_less_than DataOciUsageProxySubscriptionRedemption#time_redeemed_less_than}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#subscription_id DataOciUsageProxySubscriptionRedemption#subscription_id}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.tenancyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#tenancy_id DataOciUsageProxySubscriptionRedemption#tenancy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#id DataOciUsageProxySubscriptionRedemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_redeemed_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_redeemed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.timeRedeemedGreaterThanOrEqualTo"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_greater_than_or_equal_to DataOciUsageProxySubscriptionRedemption#time_redeemed_greater_than_or_equal_to}.

---

##### `time_redeemed_less_than`<sup>Optional</sup> <a name="time_redeemed_less_than" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.Initializer.parameter.timeRedeemedLessThan"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_less_than DataOciUsageProxySubscriptionRedemption#time_redeemed_less_than}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetTimeRedeemedGreaterThanOrEqualTo">reset_time_redeemed_greater_than_or_equal_to</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetTimeRedeemedLessThan">reset_time_redeemed_less_than</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_time_redeemed_greater_than_or_equal_to` <a name="reset_time_redeemed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetTimeRedeemedGreaterThanOrEqualTo"></a>

```python
def reset_time_redeemed_greater_than_or_equal_to() -> None
```

##### `reset_time_redeemed_less_than` <a name="reset_time_redeemed_less_than" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.resetTimeRedeemedLessThan"></a>

```python
def reset_time_redeemed_less_than() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedemption resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redemption

dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redemption

dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redemption

dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redemption

dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedemption resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciUsageProxySubscriptionRedemption to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciUsageProxySubscriptionRedemption that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxySubscriptionRedemption to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList">DataOciUsageProxySubscriptionRedemptionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tenancyIdInput">tenancy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedGreaterThanOrEqualToInput">time_redeemed_greater_than_or_equal_to_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedLessThanInput">time_redeemed_less_than_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedGreaterThanOrEqualTo">time_redeemed_greater_than_or_equal_to</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedLessThan">time_redeemed_less_than</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.items"></a>

```python
items: DataOciUsageProxySubscriptionRedemptionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList">DataOciUsageProxySubscriptionRedemptionItemsList</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenancy_id_input`<sup>Optional</sup> <a name="tenancy_id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tenancyIdInput"></a>

```python
tenancy_id_input: str
```

- *Type:* str

---

##### `time_redeemed_greater_than_or_equal_to_input`<sup>Optional</sup> <a name="time_redeemed_greater_than_or_equal_to_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedGreaterThanOrEqualToInput"></a>

```python
time_redeemed_greater_than_or_equal_to_input: str
```

- *Type:* str

---

##### `time_redeemed_less_than_input`<sup>Optional</sup> <a name="time_redeemed_less_than_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedLessThanInput"></a>

```python
time_redeemed_less_than_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `time_redeemed_greater_than_or_equal_to`<sup>Required</sup> <a name="time_redeemed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedGreaterThanOrEqualTo"></a>

```python
time_redeemed_greater_than_or_equal_to: str
```

- *Type:* str

---

##### `time_redeemed_less_than`<sup>Required</sup> <a name="time_redeemed_less_than" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.timeRedeemedLessThan"></a>

```python
time_redeemed_less_than: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemption.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxySubscriptionRedemptionConfig <a name="DataOciUsageProxySubscriptionRedemptionConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redemption

dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subscription_id: str,
  tenancy_id: str,
  id: str = None,
  time_redeemed_greater_than_or_equal_to: str = None,
  time_redeemed_less_than: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#subscription_id DataOciUsageProxySubscriptionRedemption#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#tenancy_id DataOciUsageProxySubscriptionRedemption#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#id DataOciUsageProxySubscriptionRedemption#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.timeRedeemedGreaterThanOrEqualTo">time_redeemed_greater_than_or_equal_to</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_greater_than_or_equal_to DataOciUsageProxySubscriptionRedemption#time_redeemed_greater_than_or_equal_to}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.timeRedeemedLessThan">time_redeemed_less_than</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_less_than DataOciUsageProxySubscriptionRedemption#time_redeemed_less_than}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#subscription_id DataOciUsageProxySubscriptionRedemption#subscription_id}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#tenancy_id DataOciUsageProxySubscriptionRedemption#tenancy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#id DataOciUsageProxySubscriptionRedemption#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `time_redeemed_greater_than_or_equal_to`<sup>Optional</sup> <a name="time_redeemed_greater_than_or_equal_to" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.timeRedeemedGreaterThanOrEqualTo"></a>

```python
time_redeemed_greater_than_or_equal_to: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_greater_than_or_equal_to DataOciUsageProxySubscriptionRedemption#time_redeemed_greater_than_or_equal_to}.

---

##### `time_redeemed_less_than`<sup>Optional</sup> <a name="time_redeemed_less_than" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionConfig.property.timeRedeemedLessThan"></a>

```python
time_redeemed_less_than: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redemption#time_redeemed_less_than DataOciUsageProxySubscriptionRedemption#time_redeemed_less_than}.

---

### DataOciUsageProxySubscriptionRedemptionItems <a name="DataOciUsageProxySubscriptionRedemptionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redemption

dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxySubscriptionRedemptionItemsList <a name="DataOciUsageProxySubscriptionRedemptionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redemption

dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxySubscriptionRedemptionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxySubscriptionRedemptionItemsOutputReference <a name="DataOciUsageProxySubscriptionRedemptionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redemption

dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.baseRewards">base_rewards</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.fxRate">fx_rate</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceCurrency">invoice_currency</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceNumber">invoice_number</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceTotalAmount">invoice_total_amount</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redeemedRewards">redeemed_rewards</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redemptionCode">redemption_code</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redemptionEmail">redemption_email</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.timeInvoiced">time_invoiced</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.timeRedeemed">time_redeemed</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItems">DataOciUsageProxySubscriptionRedemptionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `base_rewards`<sup>Required</sup> <a name="base_rewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.baseRewards"></a>

```python
base_rewards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `fx_rate`<sup>Required</sup> <a name="fx_rate" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.fxRate"></a>

```python
fx_rate: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `invoice_currency`<sup>Required</sup> <a name="invoice_currency" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceCurrency"></a>

```python
invoice_currency: str
```

- *Type:* str

---

##### `invoice_number`<sup>Required</sup> <a name="invoice_number" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceNumber"></a>

```python
invoice_number: str
```

- *Type:* str

---

##### `invoice_total_amount`<sup>Required</sup> <a name="invoice_total_amount" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.invoiceTotalAmount"></a>

```python
invoice_total_amount: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redeemed_rewards`<sup>Required</sup> <a name="redeemed_rewards" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redeemedRewards"></a>

```python
redeemed_rewards: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `redemption_code`<sup>Required</sup> <a name="redemption_code" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redemptionCode"></a>

```python
redemption_code: str
```

- *Type:* str

---

##### `redemption_email`<sup>Required</sup> <a name="redemption_email" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.redemptionEmail"></a>

```python
redemption_email: str
```

- *Type:* str

---

##### `time_invoiced`<sup>Required</sup> <a name="time_invoiced" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.timeInvoiced"></a>

```python
time_invoiced: str
```

- *Type:* str

---

##### `time_redeemed`<sup>Required</sup> <a name="time_redeemed" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.timeRedeemed"></a>

```python
time_redeemed: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxySubscriptionRedemptionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedemption.DataOciUsageProxySubscriptionRedemptionItems">DataOciUsageProxySubscriptionRedemptionItems</a>

---



