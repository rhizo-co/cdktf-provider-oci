# `dataOciUsageProxySubscriptionRedeemableUsers` Submodule <a name="`dataOciUsageProxySubscriptionRedeemableUsers` Submodule" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataOciUsageProxySubscriptionRedeemableUsers <a name="DataOciUsageProxySubscriptionRedeemableUsers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users oci_usage_proxy_subscription_redeemable_users}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers(
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
  filter: typing.Union[IResolvable, typing.List[DataOciUsageProxySubscriptionRedeemableUsersFilter]] = None,
  id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#subscription_id DataOciUsageProxySubscriptionRedeemableUsers#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#tenancy_id DataOciUsageProxySubscriptionRedeemableUsers#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#id DataOciUsageProxySubscriptionRedeemableUsers#id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#subscription_id DataOciUsageProxySubscriptionRedeemableUsers#subscription_id}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.tenancyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#tenancy_id DataOciUsageProxySubscriptionRedeemableUsers#tenancy_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.filter"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#filter DataOciUsageProxySubscriptionRedeemableUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#id DataOciUsageProxySubscriptionRedeemableUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toHclTerraform">to_hcl_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.putFilter">put_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetFilter">reset_filter</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetId">reset_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `put_filter` <a name="put_filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.putFilter"></a>

```python
def put_filter(
  value: typing.Union[IResolvable, typing.List[DataOciUsageProxySubscriptionRedeemableUsersFilter]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.putFilter.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>]]

---

##### `reset_filter` <a name="reset_filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetFilter"></a>

```python
def reset_filter() -> None
```

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.resetId"></a>

```python
def reset_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformDataSource">is_terraform_data_source</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedeemableUsers resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_data_source` <a name="is_terraform_data_source" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformDataSource"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.is_terraform_data_source(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.isTerraformDataSource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a DataOciUsageProxySubscriptionRedeemableUsers resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the DataOciUsageProxySubscriptionRedeemableUsers to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing DataOciUsageProxySubscriptionRedeemableUsers that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the DataOciUsageProxySubscriptionRedeemableUsers to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.filter">filter</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList">DataOciUsageProxySubscriptionRedeemableUsersFilterList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.redeemableUserCollection">redeemable_user_collection</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.filterInput">filter_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tenancyIdInput">tenancy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `filter`<sup>Required</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.filter"></a>

```python
filter: DataOciUsageProxySubscriptionRedeemableUsersFilterList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList">DataOciUsageProxySubscriptionRedeemableUsersFilterList</a>

---

##### `redeemable_user_collection`<sup>Required</sup> <a name="redeemable_user_collection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.redeemableUserCollection"></a>

```python
redeemable_user_collection: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList</a>

---

##### `filter_input`<sup>Optional</sup> <a name="filter_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.filterInput"></a>

```python
filter_input: typing.Union[IResolvable, typing.List[DataOciUsageProxySubscriptionRedeemableUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>]]

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenancy_id_input`<sup>Optional</sup> <a name="tenancy_id_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tenancyIdInput"></a>

```python
tenancy_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsers.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### DataOciUsageProxySubscriptionRedeemableUsersConfig <a name="DataOciUsageProxySubscriptionRedeemableUsersConfig" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  subscription_id: str,
  tenancy_id: str,
  filter: typing.Union[IResolvable, typing.List[DataOciUsageProxySubscriptionRedeemableUsersFilter]] = None,
  id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#subscription_id DataOciUsageProxySubscriptionRedeemableUsers#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#tenancy_id DataOciUsageProxySubscriptionRedeemableUsers#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.filter">filter</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>]]</code> | filter block. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#id DataOciUsageProxySubscriptionRedeemableUsers#id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#subscription_id DataOciUsageProxySubscriptionRedeemableUsers#subscription_id}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#tenancy_id DataOciUsageProxySubscriptionRedeemableUsers#tenancy_id}.

---

##### `filter`<sup>Optional</sup> <a name="filter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.filter"></a>

```python
filter: typing.Union[IResolvable, typing.List[DataOciUsageProxySubscriptionRedeemableUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>]]

filter block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#filter DataOciUsageProxySubscriptionRedeemableUsers#filter}

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#id DataOciUsageProxySubscriptionRedeemableUsers#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataOciUsageProxySubscriptionRedeemableUsersFilter <a name="DataOciUsageProxySubscriptionRedeemableUsersFilter" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter(
  name: str,
  values: typing.List[str],
  regex: typing.Union[bool, IResolvable] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.name">name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#name DataOciUsageProxySubscriptionRedeemableUsers#name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#values DataOciUsageProxySubscriptionRedeemableUsers#values}. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#regex DataOciUsageProxySubscriptionRedeemableUsers#regex}. |

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.name"></a>

```python
name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#name DataOciUsageProxySubscriptionRedeemableUsers#name}.

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#values DataOciUsageProxySubscriptionRedeemableUsers#values}.

---

##### `regex`<sup>Optional</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/data-sources/usage_proxy_subscription_redeemable_users#regex DataOciUsageProxySubscriptionRedeemableUsers#regex}.

---

### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection()
```


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems()
```


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems()
```


## Classes <a name="Classes" id="Classes"></a>

### DataOciUsageProxySubscriptionRedeemableUsersFilterList <a name="DataOciUsageProxySubscriptionRedeemableUsersFilterList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[DataOciUsageProxySubscriptionRedeemableUsersFilter]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>]]

---


### DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference <a name="DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.resetRegex">reset_regex</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_regex` <a name="reset_regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.resetRegex"></a>

```python
def reset_regex() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.nameInput">name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.regexInput">regex_input</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.name">name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.regex">regex</a></code> | <code>typing.Union[bool, cdktf.IResolvable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `name_input`<sup>Optional</sup> <a name="name_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.nameInput"></a>

```python
name_input: str
```

- *Type:* str

---

##### `regex_input`<sup>Optional</sup> <a name="regex_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.regexInput"></a>

```python
regex_input: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `name`<sup>Required</sup> <a name="name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.name"></a>

```python
name: str
```

- *Type:* str

---

##### `regex`<sup>Required</sup> <a name="regex" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.regex"></a>

```python
regex: typing.Union[bool, IResolvable]
```

- *Type:* typing.Union[bool, cdktf.IResolvable]

---

##### `values`<sup>Required</sup> <a name="values" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilterOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, DataOciUsageProxySubscriptionRedeemableUsersFilter]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersFilter">DataOciUsageProxySubscriptionRedeemableUsersFilter</a>]

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.emailId">email_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_id`<sup>Required</sup> <a name="email_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.emailId"></a>

```python
email_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItems</a>

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.userId">user_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.items"></a>

```python
items: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsItemsList</a>

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItems</a>

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---


### DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference <a name="DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import data_oci_usage_proxy_subscription_redeemable_users

dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.internalValue">internal_value</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.items"></a>

```python
items: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionItemsList</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollectionOutputReference.property.internalValue"></a>

```python
internal_value: DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.dataOciUsageProxySubscriptionRedeemableUsers.DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection">DataOciUsageProxySubscriptionRedeemableUsersRedeemableUserCollection</a>

---



