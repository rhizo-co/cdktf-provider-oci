# `usageProxySubscriptionRedeemableUser` Submodule <a name="`usageProxySubscriptionRedeemableUser` Submodule" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### UsageProxySubscriptionRedeemableUser <a name="UsageProxySubscriptionRedeemableUser" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser"></a>

Represents a {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user oci_usage_proxy_subscription_redeemable_user}.

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import usage_proxy_subscription_redeemable_user

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser(
  scope: Construct,
  id: str,
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  items: typing.Union[IResolvable, typing.List[UsageProxySubscriptionRedeemableUserItems]],
  subscription_id: str,
  tenancy_id: str,
  id: str = None,
  timeouts: UsageProxySubscriptionRedeemableUserTimeouts = None,
  user_id: str = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>]]</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#subscription_id UsageProxySubscriptionRedeemableUser#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#tenancy_id UsageProxySubscriptionRedeemableUser#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#id UsageProxySubscriptionRedeemableUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#user_id UsageProxySubscriptionRedeemableUser#user_id}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.connection"></a>

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.count"></a>

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.forEach"></a>

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.lifecycle"></a>

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.items"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#items UsageProxySubscriptionRedeemableUser#items}

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.subscriptionId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#subscription_id UsageProxySubscriptionRedeemableUser#subscription_id}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.tenancyId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#tenancy_id UsageProxySubscriptionRedeemableUser#tenancy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.id"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#id UsageProxySubscriptionRedeemableUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.timeouts"></a>

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#timeouts UsageProxySubscriptionRedeemableUser#timeouts}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.Initializer.parameter.userId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#user_id UsageProxySubscriptionRedeemableUser#user_id}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems">put_items</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts">put_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetTimeouts">reset_timeouts</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetUserId">reset_user_id</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `add_override` <a name="add_override" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.hasResourceMove"></a>

```python
def has_resource_move() -> typing.Union[TerraformResourceMoveByTarget, TerraformResourceMoveById]
```

##### `import_from` <a name="import_from" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.importFrom.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: typing.Union[str, typing.Union[int, float]] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveTo.parameter.index"></a>

- *Type:* typing.Union[str, typing.Union[int, float]]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_items` <a name="put_items" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems"></a>

```python
def put_items(
  value: typing.Union[IResolvable, typing.List[UsageProxySubscriptionRedeemableUserItems]]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putItems.parameter.value"></a>

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>]]

---

##### `put_timeouts` <a name="put_timeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts"></a>

```python
def put_timeouts(
  create: str = None,
  delete: str = None,
  update: str = None
) -> None
```

###### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts.parameter.create"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#create UsageProxySubscriptionRedeemableUser#create}.

---

###### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts.parameter.delete"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#delete UsageProxySubscriptionRedeemableUser#delete}.

---

###### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.putTimeouts.parameter.update"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#update UsageProxySubscriptionRedeemableUser#update}.

---

##### `reset_id` <a name="reset_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_timeouts` <a name="reset_timeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetTimeouts"></a>

```python
def reset_timeouts() -> None
```

##### `reset_user_id` <a name="reset_user_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.resetUserId"></a>

```python
def reset_user_id() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTF code for importing a UsageProxySubscriptionRedeemableUser resource upon running "cdktf plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct"></a>

```python
from rhizo-co_cdktf_provider_oci import usage_proxy_subscription_redeemable_user

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.is_construct(
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

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement"></a>

```python
from rhizo-co_cdktf_provider_oci import usage_proxy_subscription_redeemable_user

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource"></a>

```python
from rhizo-co_cdktf_provider_oci import usage_proxy_subscription_redeemable_user

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport"></a>

```python
from rhizo-co_cdktf_provider_oci import usage_proxy_subscription_redeemable_user

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTF code for importing a UsageProxySubscriptionRedeemableUser resource upon running "cdktf plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the UsageProxySubscriptionRedeemableUser to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing UsageProxySubscriptionRedeemableUser that should be imported.

Refer to the {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktf.TerraformProvider

? Optional instance of the provider where the UsageProxySubscriptionRedeemableUser to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.cdktfStack">cdktf_stack</a></code> | <code>cdktf.TerraformStack</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktf.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.items">items</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList">UsageProxySubscriptionRedeemableUserItemsList</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference">UsageProxySubscriptionRedeemableUserTimeoutsOutputReference</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.itemsInput">items_input</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionIdInput">subscription_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyIdInput">tenancy_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeoutsInput">timeouts_input</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userIdInput">user_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionId">subscription_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyId">tenancy_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userId">user_id</a></code> | <code>str</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktf.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktf.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.items"></a>

```python
items: UsageProxySubscriptionRedeemableUserItemsList
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList">UsageProxySubscriptionRedeemableUserItemsList</a>

---

##### `timeouts`<sup>Required</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeouts"></a>

```python
timeouts: UsageProxySubscriptionRedeemableUserTimeoutsOutputReference
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference">UsageProxySubscriptionRedeemableUserTimeoutsOutputReference</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `items_input`<sup>Optional</sup> <a name="items_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.itemsInput"></a>

```python
items_input: typing.Union[IResolvable, typing.List[UsageProxySubscriptionRedeemableUserItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>]]

---

##### `subscription_id_input`<sup>Optional</sup> <a name="subscription_id_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionIdInput"></a>

```python
subscription_id_input: str
```

- *Type:* str

---

##### `tenancy_id_input`<sup>Optional</sup> <a name="tenancy_id_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyIdInput"></a>

```python
tenancy_id_input: str
```

- *Type:* str

---

##### `timeouts_input`<sup>Optional</sup> <a name="timeouts_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.timeoutsInput"></a>

```python
timeouts_input: typing.Union[IResolvable, UsageProxySubscriptionRedeemableUserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>]

---

##### `user_id_input`<sup>Optional</sup> <a name="user_id_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userIdInput"></a>

```python
user_id_input: str
```

- *Type:* str

---

##### `id`<sup>Required</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

---

##### `user_id`<sup>Required</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.userId"></a>

```python
user_id: str
```

- *Type:* str

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUser.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### UsageProxySubscriptionRedeemableUserConfig <a name="UsageProxySubscriptionRedeemableUserConfig" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import usage_proxy_subscription_redeemable_user

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig(
  connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection] = None,
  count: typing.Union[typing.Union[int, float], TerraformCount] = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]] = None,
  items: typing.Union[IResolvable, typing.List[UsageProxySubscriptionRedeemableUserItems]],
  subscription_id: str,
  tenancy_id: str,
  id: str = None,
  timeouts: UsageProxySubscriptionRedeemableUserTimeouts = None,
  user_id: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.connection">connection</a></code> | <code>typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.count">count</a></code> | <code>typing.Union[typing.Union[int, float], cdktf.TerraformCount]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktf.ITerraformDependable]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.forEach">for_each</a></code> | <code>cdktf.ITerraformIterator</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.lifecycle">lifecycle</a></code> | <code>cdktf.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provider">provider</a></code> | <code>cdktf.TerraformProvider</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provisioners">provisioners</a></code> | <code>typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.items">items</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>]]</code> | items block. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.subscriptionId">subscription_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#subscription_id UsageProxySubscriptionRedeemableUser#subscription_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.tenancyId">tenancy_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#tenancy_id UsageProxySubscriptionRedeemableUser#tenancy_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#id UsageProxySubscriptionRedeemableUser#id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.timeouts">timeouts</a></code> | <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a></code> | timeouts block. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.userId">user_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#user_id UsageProxySubscriptionRedeemableUser#user_id}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.connection"></a>

```python
connection: typing.Union[SSHProvisionerConnection, WinrmProvisionerConnection]
```

- *Type:* typing.Union[cdktf.SSHProvisionerConnection, cdktf.WinrmProvisionerConnection]

---

##### `count`<sup>Optional</sup> <a name="count" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.count"></a>

```python
count: typing.Union[typing.Union[int, float], TerraformCount]
```

- *Type:* typing.Union[typing.Union[int, float], cdktf.TerraformCount]

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktf.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktf.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktf.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktf.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.provisioners"></a>

```python
provisioners: typing.List[typing.Union[FileProvisioner, LocalExecProvisioner, RemoteExecProvisioner]]
```

- *Type:* typing.List[typing.Union[cdktf.FileProvisioner, cdktf.LocalExecProvisioner, cdktf.RemoteExecProvisioner]]

---

##### `items`<sup>Required</sup> <a name="items" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.items"></a>

```python
items: typing.Union[IResolvable, typing.List[UsageProxySubscriptionRedeemableUserItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>]]

items block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#items UsageProxySubscriptionRedeemableUser#items}

---

##### `subscription_id`<sup>Required</sup> <a name="subscription_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.subscriptionId"></a>

```python
subscription_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#subscription_id UsageProxySubscriptionRedeemableUser#subscription_id}.

---

##### `tenancy_id`<sup>Required</sup> <a name="tenancy_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.tenancyId"></a>

```python
tenancy_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#tenancy_id UsageProxySubscriptionRedeemableUser#tenancy_id}.

---

##### `id`<sup>Optional</sup> <a name="id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#id UsageProxySubscriptionRedeemableUser#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `timeouts`<sup>Optional</sup> <a name="timeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.timeouts"></a>

```python
timeouts: UsageProxySubscriptionRedeemableUserTimeouts
```

- *Type:* <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>

timeouts block.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#timeouts UsageProxySubscriptionRedeemableUser#timeouts}

---

##### `user_id`<sup>Optional</sup> <a name="user_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserConfig.property.userId"></a>

```python
user_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#user_id UsageProxySubscriptionRedeemableUser#user_id}.

---

### UsageProxySubscriptionRedeemableUserItems <a name="UsageProxySubscriptionRedeemableUserItems" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import usage_proxy_subscription_redeemable_user

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems(
  email_id: str,
  first_name: str = None,
  last_name: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.emailId">email_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#email_id UsageProxySubscriptionRedeemableUser#email_id}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.firstName">first_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#first_name UsageProxySubscriptionRedeemableUser#first_name}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.lastName">last_name</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#last_name UsageProxySubscriptionRedeemableUser#last_name}. |

---

##### `email_id`<sup>Required</sup> <a name="email_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.emailId"></a>

```python
email_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#email_id UsageProxySubscriptionRedeemableUser#email_id}.

---

##### `first_name`<sup>Optional</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#first_name UsageProxySubscriptionRedeemableUser#first_name}.

---

##### `last_name`<sup>Optional</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#last_name UsageProxySubscriptionRedeemableUser#last_name}.

---

### UsageProxySubscriptionRedeemableUserTimeouts <a name="UsageProxySubscriptionRedeemableUserTimeouts" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts"></a>

#### Initializer <a name="Initializer" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import usage_proxy_subscription_redeemable_user

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts(
  create: str = None,
  delete: str = None,
  update: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.create">create</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#create UsageProxySubscriptionRedeemableUser#create}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.delete">delete</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#delete UsageProxySubscriptionRedeemableUser#delete}. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.update">update</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#update UsageProxySubscriptionRedeemableUser#update}. |

---

##### `create`<sup>Optional</sup> <a name="create" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.create"></a>

```python
create: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#create UsageProxySubscriptionRedeemableUser#create}.

---

##### `delete`<sup>Optional</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.delete"></a>

```python
delete: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#delete UsageProxySubscriptionRedeemableUser#delete}.

---

##### `update`<sup>Optional</sup> <a name="update" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts.property.update"></a>

```python
update: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/6.18.0/docs/resources/usage_proxy_subscription_redeemable_user#update UsageProxySubscriptionRedeemableUser#update}.

---

## Classes <a name="Classes" id="Classes"></a>

### UsageProxySubscriptionRedeemableUserItemsList <a name="UsageProxySubscriptionRedeemableUserItemsList" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import usage_proxy_subscription_redeemable_user

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> UsageProxySubscriptionRedeemableUserItemsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>]]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsList.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, typing.List[UsageProxySubscriptionRedeemableUserItems]]
```

- *Type:* typing.Union[cdktf.IResolvable, typing.List[<a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>]]

---


### UsageProxySubscriptionRedeemableUserItemsOutputReference <a name="UsageProxySubscriptionRedeemableUserItemsOutputReference" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import usage_proxy_subscription_redeemable_user

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetFirstName">reset_first_name</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetLastName">reset_last_name</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_first_name` <a name="reset_first_name" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetFirstName"></a>

```python
def reset_first_name() -> None
```

##### `reset_last_name` <a name="reset_last_name" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.resetLastName"></a>

```python
def reset_last_name() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailIdInput">email_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstNameInput">first_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastNameInput">last_name_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailId">email_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstName">first_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastName">last_name</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `email_id_input`<sup>Optional</sup> <a name="email_id_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailIdInput"></a>

```python
email_id_input: str
```

- *Type:* str

---

##### `first_name_input`<sup>Optional</sup> <a name="first_name_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstNameInput"></a>

```python
first_name_input: str
```

- *Type:* str

---

##### `last_name_input`<sup>Optional</sup> <a name="last_name_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastNameInput"></a>

```python
last_name_input: str
```

- *Type:* str

---

##### `email_id`<sup>Required</sup> <a name="email_id" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.emailId"></a>

```python
email_id: str
```

- *Type:* str

---

##### `first_name`<sup>Required</sup> <a name="first_name" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.firstName"></a>

```python
first_name: str
```

- *Type:* str

---

##### `last_name`<sup>Required</sup> <a name="last_name" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.lastName"></a>

```python
last_name: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItemsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UsageProxySubscriptionRedeemableUserItems]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserItems">UsageProxySubscriptionRedeemableUserItems</a>]

---


### UsageProxySubscriptionRedeemableUserTimeoutsOutputReference <a name="UsageProxySubscriptionRedeemableUserTimeoutsOutputReference" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference"></a>

#### Initializers <a name="Initializers" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer"></a>

```python
from rhizo-co_cdktf_provider_oci import usage_proxy_subscription_redeemable_user

usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktf.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktf.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetCreate">reset_create</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetDelete">reset_delete</a></code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetUpdate">reset_update</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktf.IResolveContext

---

##### `to_string` <a name="to_string" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_create` <a name="reset_create" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetCreate"></a>

```python
def reset_create() -> None
```

##### `reset_delete` <a name="reset_delete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetDelete"></a>

```python
def reset_delete() -> None
```

##### `reset_update` <a name="reset_update" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.resetUpdate"></a>

```python
def reset_update() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.createInput">create_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.deleteInput">delete_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.updateInput">update_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.create">create</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.delete">delete</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.update">update</a></code> | <code>str</code> | *No description.* |
| <code><a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.internalValue">internal_value</a></code> | <code>typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `create_input`<sup>Optional</sup> <a name="create_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.createInput"></a>

```python
create_input: str
```

- *Type:* str

---

##### `delete_input`<sup>Optional</sup> <a name="delete_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.deleteInput"></a>

```python
delete_input: str
```

- *Type:* str

---

##### `update_input`<sup>Optional</sup> <a name="update_input" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.updateInput"></a>

```python
update_input: str
```

- *Type:* str

---

##### `create`<sup>Required</sup> <a name="create" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.create"></a>

```python
create: str
```

- *Type:* str

---

##### `delete`<sup>Required</sup> <a name="delete" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.delete"></a>

```python
delete: str
```

- *Type:* str

---

##### `update`<sup>Required</sup> <a name="update" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.update"></a>

```python
update: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeoutsOutputReference.property.internalValue"></a>

```python
internal_value: typing.Union[IResolvable, UsageProxySubscriptionRedeemableUserTimeouts]
```

- *Type:* typing.Union[cdktf.IResolvable, <a href="#rhizo-co-terraform-provider-oci.usageProxySubscriptionRedeemableUser.UsageProxySubscriptionRedeemableUserTimeouts">UsageProxySubscriptionRedeemableUserTimeouts</a>]

---



